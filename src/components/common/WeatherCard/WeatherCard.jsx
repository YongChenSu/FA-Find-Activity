import React from "react";
import styled from "@emotion/styled";
import dayjs from "dayjs";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { WiStrongWind } from "react-icons/wi";
import { IoIosUmbrella } from "react-icons/io";
import { VscLoading } from "react-icons/vsc";
import { BiRefresh } from "react-icons/bi";
import { WiThermometer } from "react-icons/wi";
import WeatherIcon from "./weatherIcon";

const WeatherCardWrapper = styled.div`
  color: ${({ theme }) => theme.weatherCardColor};
  width: 200px;
  border: 1px solid ${({ theme }) => theme.weatherCardColor};
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 0.25rem;
  border-radius: ${({ theme }) => theme.$borderRadius};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.weatherCardBackgroundColor};
`;

const Location = styled.div`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.weatherCardHighLight};
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
  color: ${({ theme }) => theme.weatherCardHighLight};
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
    color: ${({ theme }) => theme.weatherCardHighLight};
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
    color: ${({ theme }) => theme.weatherCardHighLight};
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
    color: ${({ theme }) => theme.weatherCardHighLight};
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
    color: ${({ theme }) => theme.weatherCardHighLight};
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

const WeatherCard = ({ weatherData, moment, fetchData }) => {
  const {
    observationTime,
    locationName,
    description,
    windSpeed,
    temperature,
    rainPossibility,
    comfortability,
    minTemperature,
    maxTemperature,
    weatherCode,
    isLoading,
  } = weatherData;

  return (
    <WeatherCardWrapper>
      <Location>{locationName}</Location>
      <Description>
        {description} {comfortability}
      </Description>
      <CurrentWeather>
        <Temperature>{Math.round(temperature)}</Temperature>
        <Celsius>°C</Celsius>
        <WeatherIcon weatherCode={weatherCode} moment={moment} />
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
      <Refresh onClick={fetchData} isLoading={isLoading}>
        最後觀測時間：
        {new Intl.DateTimeFormat("zh-TW", {
          hour: "numeric",
          minute: "numeric",
        }).format(dayjs(observationTime))}{" "}
        {isLoading ? <VscLoading /> : <BiRefresh />}
      </Refresh>
    </WeatherCardWrapper>
  );
};

export default WeatherCard;
