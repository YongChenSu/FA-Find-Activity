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
  width: 1200px;
  max-width: 65%;
  margin: 0 auto;
`;

const BannerContainer = styled.div`
  position: relative;
  height: 650px;
  margin: 0 auto;
`;

const Banner = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const ActInfoContainer = styled.div`
  padding: 2rem 0rem;
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

const CategoryUnorderList = styled.ul``;

const CategoryOrderList = styled.li`
  line-height: 2.5rem
  text-align: justify;
  word-break: break-word;
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
      console.log(data.category);
      currentPageActivityData = {
        imageUrl: data.imageUrl,
        title: data.title,
        category: data.category,
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

  const cateGoryCode2Type = (categoryCode) => {
    let type = "";
    switch (categoryCode) {
      case "1":
        type = "音樂";
        break;
      case "4":
        type = "親子";
        break;
      case "6":
        type = "展覽";
        break;
      case "7":
        type = "講座";
        break;
      case "8":
        type = "電影";
        break;
      default:
        type = "";
    }
    return type;
  };

  return (
    <>
      <Header />
      <ActivityContainer>
        <ActivityWrapper>
          <BannerContainer>
            <Banner src={currentPageActivityData.imageUrl} />
          </BannerContainer>
          <ActInfoContainer>
            <Title>{currentPageActivityData.title}</Title>

            <CategoryUnorderList>
              <CategoryOrderList>分類</CategoryOrderList>
              <CategoryOrderList>
                {cateGoryCode2Type(currentPageActivityData.category)}
              </CategoryOrderList>
            </CategoryUnorderList>

            <CategoryUnorderList>
              <CategoryOrderList>時間</CategoryOrderList>
              <CategoryOrderList>
                {currentPageActivityData.time}
              </CategoryOrderList>
            </CategoryUnorderList>

            <CategoryUnorderList>
              <CategoryOrderList>地點</CategoryOrderList>
              <CategoryOrderList>
                {currentPageActivityData.location}
              </CategoryOrderList>
            </CategoryUnorderList>

            <CategoryUnorderList>
              <CategoryOrderList>簡介</CategoryOrderList>
              <CategoryOrderList>
                {currentPageActivityData.introduction}
              </CategoryOrderList>
            </CategoryUnorderList>
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
