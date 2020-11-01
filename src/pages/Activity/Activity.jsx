import React, { useState } from 'react'
import styled from '@emotion/styled'
import theme from '../../styles/base/variable.js'
import { ThemeProvider } from 'emotion-theming'
import Button from '../../components/common/Button'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'

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

const Weather = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0 2  rem 0;
`

const Card = styled.div`
  height: 200px;
  width: 100%;
  background-color: ${({ theme }) => theme.$colorLightGreen};
  border: 1px solid grey;
  margin: 0 0.5rem;
  border-radius: ${({ theme }) => theme.$borderRadius };
  text-align: center;
  line-height: 200px;
`

const Activity = () => {
  const [currentTheme, setCurrentTheme] = useState('main')
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
            <Weather>
              <Card>MON</Card>
              <Card>TUE</Card>
              <Card>WED</Card>
              <Card>THU</Card>
              <Card>FRI</Card>
            </Weather>
          </ActivityWrapper>
        </ActivityContainer>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Activity