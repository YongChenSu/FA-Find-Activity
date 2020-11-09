import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import dayjs from "dayjs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiStrongWind } from "react-icons/wi";
import { IoIosUmbrella } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { BiRefresh } from "react-icons/bi";
import { WiThermometer } from "react-icons/wi";

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

const WeatherCard = styled.div`
  color: ${({ theme }) => theme.$colorRed};
  width: 200px;
  border: 1px solid ${({ theme }) => theme.$colorRed};
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 0.25rem;
  border-radius: ${({ theme }) => theme.$borderRadius};
  padding: 0.5rem;
`;

const Location = styled.div`
  font-size: 2.5rem;
`;

const Description = styled.div`
  font-size: 1rem;
`;

const CurrentWeather = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.75rem 0 0.5rem 0;
  svg {
    width: 3.25rem;
    height: 3.25rem;
  }
`;

const Temperature = styled.div`
  font-size: 3.25rem;
`;

const Celsius = styled.div`
  font-size: 1rem;
`;

const AirFlow = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  font-weight: 300;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0 0;
  }
`;

const Rain = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  font-weight: 300;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0 0;
  }
`;

const TemperatureRange = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.5rem;
  font-weight: 300;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem 0 0;
  }
`;

const Refresh = styled.div`
  font-size: 0.5rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin: 0.5rem 0 0 0;

  svg {
    margin-left: 0.5rem;
    width: 1rem;
    height: 1rem;
    cursor: pointer;

    animation: rotate infinite 1.5s linear;
    animation-duration: ${({ isLoading }) => (isLoading ? "1.5s" : "0s")};
  }

  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;

const title = "  涼州詞王翰 - 古詩誦賞";
const tag = "美食";
const time = "2020/11/01";
const location = "臺北市松山區";
const introduction =
  "葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。";

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

  useEffect(() => {
    getCurrentWeatherData();
    getForecastData();
  }, []);

  const getCurrentWeatherData = () => {
    setWeatherData((prevState) => ({
      ...prevState,
      isLoading: true,
    }));

    fetch(`${BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`)
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

        setWeatherData((prevState) => ({
          ...prevState,
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          isLoading: false,
        }));
      });
  };

  const FORECAST_BASE_URL =
    "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization";
  const LOCATION_NAME_FORECAST = "臺北市";
  const getForecastData = () => {
    fetch(
      `${FORECAST_BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME_FORECAST}`
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0];
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (
              ["Wx", "PoP", "CI", "MinT", "MaxT"].includes(item.elementName)
            ) {
              neededElements[item.elementName] = item.time[0].parameter;
            }
            return neededElements;
          },
          {}
        );

        setWeatherData((preState) => ({
          ...preState,
          description: weatherElements.Wx.parameterName,
          weatherCode: weatherElements.Wx.parameterValue,
          rainPossibility: weatherElements.PoP.parameterName,
          comfortability: weatherElements.CI.parameterName,
          minTemperature: weatherElements.MinT.parameterName,
          maxTemperature: weatherElements.MaxT.parameterName,
        }));
      });
  };

  const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    isLoading,
    comfortability,
    minTemperature,
    maxTemperature,
  } = weatherData;

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

          <WeatherContainer>
            <WeatherCard>
              <Location>{locationName}</Location>
              <Description>
                {description} {comfortability}
              </Description>
              <CurrentWeather>
                <Temperature>{Math.round(temperature)}</Temperature>
                <Celsius>°C</Celsius>
                <TiWeatherPartlySunny />
              </CurrentWeather>
              <AirFlow>
                <WiStrongWind />
                {windSpeed} m/h
              </AirFlow>
              <Rain>
                <IoIosUmbrella />
                {rainPossibility}%
              </Rain>
              <TemperatureRange>
                <WiThermometer />
                <div>{minTemperature} °</div>
                <div>{maxTemperature} °</div>
              </TemperatureRange>
              <Refresh
                onClick={() => {
                  getCurrentWeatherData();
                  getForecastData();
                }}
                isLoading={isLoading}
              >
                最後觀測時間：
                {new Intl.DateTimeFormat("zh-TW", {
                  hour: "numeric",
                  minute: "numeric",
                }).format(dayjs(observationTime))}{" "}
                {isLoading ? <VscLoading /> : <BiRefresh />}
              </Refresh>
            </WeatherCard>
          </WeatherContainer>
        </ActivityWrapper>
      </ActivityContainer>
      <Footer />
    </>
  );
};

export default Activity;
