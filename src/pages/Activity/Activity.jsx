import React, { useEffect, useState, useMemo, useContext } from "react";
import { useParams } from "react-router";
import styled from "@emotion/styled";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import { getMoment } from "../../utils/helpers";
import { ThemeProvider } from "emotion-theming";
import theme from "../../styles/base/variable";
import WeatherCard from "../../components/common/WeatherCard";
import useWeatherAPI from "../../hooks/useWeatherAPI";
import { AuthContext } from "../../contexts";

const ActivityContainer = styled.div`
  font-family: ${({ theme }) => theme.$fontFamily};
  font-size: 1.5rem;
  padding-top: 4rem;
`;

const ActivityWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const Banner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  max-height: 600px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
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

const AUTHORIZATION_KEY = "CWB-15DFF2FC-FFFB-49E9-BF7F-EBB9164F4B47";
const LOCATION_NAME = "臺北";
const LOCATION_NAME_FORECAST = "臺北市";

let currentPageActivityData = {
  imageUrl: "",
  title: "",
  category: "",
  time: "",
  location: "",
  descriptionFilterHtml: "",
};

const Activity = () => {
  const { modifiedData } = useContext(AuthContext);
  const [weatherData, fetchData] = useWeatherAPI({
    locationName: LOCATION_NAME,
    cityName: LOCATION_NAME_FORECAST,
    authorizationKey: AUTHORIZATION_KEY,
  });
  const [currentTheme, setCurrentTheme] = useState("main");

  const moment = useMemo(() => getMoment(LOCATION_NAME_FORECAST), []);

  const { id } = useParams();

  modifiedData.map((data) => {
    if (data.id === Number(id)) {
      console.log(data);
      currentPageActivityData = {
        imageUrl: data.imageUrl,
        title: data.title,
        tag: data.category,
        time: data.showInfo[0].endTime,
        location: data.showInfo[0].location,
        introduction: data.descriptionFilterHtml,
      };
    }
  });

  useEffect(() => {
    setCurrentTheme(moment === "day" ? "main" : "dark");
  }, [moment]);
  return (
    <>
      <Header />
      <ActivityContainer>
        <ActivityWrapper>
          <Banner src={currentPageActivityData.imageUrl} />
          <ActInfoContainer>
            <Title>{currentPageActivityData.title}</Title>
            <ul>
              <li>分類</li>
              <li>{currentPageActivityData.category}</li>
            </ul>
            <ul>
              <li>時間</li>
              <li>{currentPageActivityData.time}</li>
            </ul>
            <ul>
              <li>地點</li>
              <li>{currentPageActivityData.location}</li>
            </ul>
            <ul>
              <li>簡介</li>
              <li>{currentPageActivityData.introduction}</li>
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
