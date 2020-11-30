import { useState, useEffect, useCallback } from "react";

// const CURRENT_WEATHER_BASE_URL =
//   "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization";
// const FORECAST_BASE_URL =
//   "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization";

const fetchCurrentWeatherData = ({ authorizationKey, locationName }) => {
  console.log(authorizationKey);
  console.log(locationName);

  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization=${authorizationKey}&locationName=${locationName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["WDSD", "TEMP"].includes(item.elementName)) {
            neededElements[item.elementName] = item.elementValue;
          }
          return neededElements;
        },
        {}
      );

      return {
        observationTime: locationData.time.obsTime,
        locationName: locationData.locationName,
        temperature: weatherElements.TEMP,
        windSpeed: weatherElements.WDSD,
      };
    });
};

const fetchForecastData = ({ authorizationKey, cityName }) => {
  return fetch(
    `https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=${authorizationKey}&locationName=${cityName}`
  )
    .then((response) => response.json())
    .then((data) => {
      const locationData = data.records.location[0];
      const weatherElements = locationData.weatherElement.reduce(
        (neededElements, item) => {
          if (["Wx", "PoP", "CI", "MinT", "MaxT"].includes(item.elementName)) {
            neededElements[item.elementName] = item.time[0].parameter;
          }
          return neededElements;
        },
        {}
      );

      return {
        description: weatherElements.Wx.parameterName,
        weatherCode: weatherElements.Wx.parameterValue,
        rainPossibility: weatherElements.PoP.parameterName,
        comfortability: weatherElements.CI.parameterName,
        minTemperature: weatherElements.MinT.parameterName,
        maxTemperature: weatherElements.MaxT.parameterName,
      };
    });
};

const useWeatherAPI = ({ locationName, cityName, authorizationKey }) => {
  const [weatherData, setWeatherData] = useState({
    observationTime: new Date(),
    locationName: "",
    description: "",
    windSpeed: 0,
    temperature: 0,
    rainPossibility: 0,
    comfortability: "",
    minTemperature: "",
    maxTemperature: "",
    weatherCode: 0,
    isLoading: true,
  });

  const fetchData = useCallback(async () => {
    setWeatherData((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const [currentWeather, weatherForecast] = await Promise.all([
      fetchCurrentWeatherData({ authorizationKey, locationName }),
      fetchForecastData({ authorizationKey, cityName }),
    ]);

    setWeatherData({
      ...currentWeather,
      ...weatherForecast,
      isLoading: false,
    });
  }, [authorizationKey, locationName, cityName]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return [weatherData, fetchData];
};

export default useWeatherAPI;
