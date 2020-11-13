import React, { useEffect, useState, useCallback, useMemo } from "react";
import styled from "@emotion/styled";
import Button from "../../components/common/Button";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { getMoment } from "../../utils/helpers";
import { ThemeProvider } from "emotion-theming";
import theme from "../../styles/base/variable";
import WeatherCard from "../../components/common/WeatherCard";
import { fetchCurrentWeatherData, fetchForecastData } from "../../WebAPI";

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

const LOCATION_NAME_FORECAST = "臺北市";

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
