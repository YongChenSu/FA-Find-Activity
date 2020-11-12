import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { getMoment } from "../../utils/helpers";
import { ThemeProvider } from "emotion-theming";
import theme from "../../styles/base/variable";
import WeatherCard from "../../components/common/WeatherCard";

const ActivityContainer = styled.div`
  font-family: ${({ theme }) => theme.$fontFamily};
  font-size: 1.5rem;
  padding-top: 4rem;
`;

const ActivityWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 380px;
  background-color: ${({ theme }) => theme.$colorYellow};
`;

const ActInfoContainer = styled.div`
  padding: 2rem 4rem;
  & > ul {
    padding: 0.5rem 0;
  }

  & > ul > li:nth-child(1) {
    color: ${({ theme }) => theme.$colorRed};
    font-weight: bold;
    margin: 0 0 0.25rem 0;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`;

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem 0;
`;

const title = `年輪說`;
const tag = "美食";
const time = "2020/11/01";
const location = "臺北市松山區";
const introduction = `一份滷味豆皮，兩包鹹水雞，三串炭烤玉米，四是芒果雪花冰，點了車輪餅，奶油加芋泥，
  飽到脹氣，再繼續，四十花生麻吉，百元不找零，千層麵點下去，萬巒豬腳放一起，吃這麼多東西
，還瘦不拉機，真是個 bad lady`;

const actInfo = {
  title,
  tag,
  time,
  location,
  introduction,
};

const BASE_URL =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization";
const AUTHORIZATION_KEY = "CWB-15DFF2FC-FFFB-49E9-BF7F-EBB9164F4B47";
const LOCATION_NAME = "臺北";

const fetchCurrentWeatherData = () => {
  return fetch(`${BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`)
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

const FORECAST_BASE_URL =
  "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization";
const LOCATION_NAME_FORECAST = "臺北市";

const fetchForecastData = () => {
  return fetch(
    `${FORECAST_BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}`
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

const Activity = () => {
  const [currentTheme, setCurrentTheme] = useState("main");
  const [weatherData, setWeatherData] = useState({
    observationTime: new Date(),
    locationName: "",
    temperature: 0,
    windSpeed: 0,
    description: "",
    weatherCode: 0,
    rainPossibility: 0,
    comfortability: "",
    minTemperature: "",
    maxTemperature: "",
    isLoading: true,
  });
  const moment = useMemo(() => getMoment(LOCATION_NAME_FORECAST), []);
  useEffect(() => {
    setCurrentTheme(moment === "day" ? "main" : "dark");
  }, [moment]);

  const fetchData = useCallback(async () => {
    setWeatherData((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    const [currentWeather, weatherForecast] = await Promise.all([
      fetchCurrentWeatherData(),
      fetchForecastData(),
    ]);

    setWeatherData({
      ...currentWeather,
      ...weatherForecast,
      isLoading: false,
    });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <ActivityContainer>
        <ActivityWrapper>
          <Banner />
          <ActInfoContainer>
            <Title>{actInfo.title}</Title>
            <ul>
              <li>分類</li>
              <li>{actInfo.tag}</li>
            </ul>
            <ul>
              <li>時間</li>
              <li>{actInfo.time}</li>
            </ul>
            <ul>
              <li>地點</li>
              <li>{actInfo.location}</li>
            </ul>
            <ul>
              <li>簡介</li>
              <li>{actInfo.introduction}</li>
            </ul>
          </ActInfoContainer>
          <ThemeProvider theme={theme[currentTheme]}>
            <WeatherContainer>
              <WeatherCard
                weatherData={weatherData}
                moment={moment}
                fetchData={fetchData}
              />
            </WeatherContainer>
          </ThemeProvider>
        </ActivityWrapper>
      </ActivityContainer>
      <Footer />
    </>
  );
};

export default Activity;
