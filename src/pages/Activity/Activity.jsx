import React, { useState } from 'react'
import styled from '@emotion/styled'
import theme from '../../styles/base/variable.js'
import { ThemeProvider } from 'emotion-theming'
import Button from '../../components/common/Button'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import dayjs from 'dayjs';
import { TiWeatherPartlySunny } from 'react-icons/ti'
import { WiStrongWind } from 'react-icons/wi'
import { IoIosUmbrella } from 'react-icons/io'

const ActivityContainer = styled.div`
  font-family: ${({ theme}) => theme.$fontFamily};
  font-size: 1.5rem;
  padding-top: 4rem;
`

const ActivityWrapper = styled.div`
  max-width: 80%;
  margin: 0 auto;
`

const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 380px;
  background-color: ${({ theme }) => theme.$colorYellow };
`

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
`

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
`

const WeatherContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem 0 2rem 0;
`

const WeatherCard = styled.div`
  color: ${({ theme }) => theme.$colorGreen};
  width: 200px;
  border: 1px solid ${({ theme }) => theme.$colorGreen};
  box-shadow: 1px 1px 1px 2px rgba(0, 0, 0, 0.1);
  margin: 0 0.25rem;
  border-radius: ${({ theme }) => theme.$borderRadius };
  padding: 0.5rem;
`

const Location = styled.div`
  font-size: 2rem;
`

const Description = styled.div`
  font-size: 1rem;
`

const CurrentWeather = styled.div`
  display: flex;
  justify-content: center;
  margin: 0.5rem 0;
  svg {
    width: 3.25rem;
    height: 3.25rem;
  }
`

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
`

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
`

const title = '  涼州詞王翰 - 古詩誦賞'
  const tag = '美食'
  const time = '2020/11/01'
  const location = '臺北市松山區'
  const introduction = '葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。葡萄美酒夜光杯，欲飲琵琶馬上催，醉臥沙場君莫笑，古來征戰幾人回。'
  
  const actInfo = {
    title,
    tag,
    time,
    location,
    introduction,
  }

const BASE_URL = 'https://opendata.cwb.gov.tw/api/v1/rest/datastore/O-A0003-001?Authorization'
const AUTHORIZATION_KEY = 'CWB-15DFF2FC-FFFB-49E9-BF7F-EBB9164F4B47'
const LOCATION_NAME = '臺北'

const Activity = () => {
  const [currentTheme, setCurrentTheme] = useState('main')  
  const [currentWeather, setCurrentWeather] = useState({
    observationTime: '2020-12-12 22:10:00',
    locationName: '臺北市',
    description: '晴天',
    windSpeed: 5,
    temperature: 25,
    rainPossibility: 20,
  });

  const getWeatherData = () => {
    fetch(
      `${BASE_URL}=${AUTHORIZATION_KEY}&locationName=${LOCATION_NAME}`
    )
      .then((response) => response.json())
      .then((data) => {
        const locationData = data.records.location[0]
        const weatherElements = locationData.weatherElement.reduce(
          (neededElements, item) => {
            if (['WDSD', 'TEMP'].includes(item.elementName)) {
              neededElements[item.elementName] = item.elementValue
            }
            return neededElements
          },
          {}
        )

        setCurrentWeather({
          observationTime: locationData.time.obsTime,
          locationName: locationData.locationName,
          temperature: weatherElements.TEMP,
          windSpeed: weatherElements.WDSD,
          description: '大晴天',
          rainPossibility: 10,
        });
      })
  }

  getWeatherData()

  return (
    <>
      <ThemeProvider theme={theme[currentTheme]}>
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
                <Location>{currentWeather.locationName}</Location>
                <Description>{currentWeather.description}</Description>
                <CurrentWeather>
                  <Temperature>{Math.round(currentWeather.temperature)}</Temperature>
                  <Celsius>°C</Celsius>
                  <TiWeatherPartlySunny />
                </CurrentWeather>
                <AirFlow>
                  <WiStrongWind />{currentWeather.windSpeed} m/h
                </AirFlow>
                <Rain>
                  <IoIosUmbrella />{currentWeather.rainPossibility}%
                </Rain>
              </WeatherCard>
            </WeatherContainer>
          </ActivityWrapper>
        </ActivityContainer>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Activity