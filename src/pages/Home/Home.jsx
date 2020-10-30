import React, { Component, useState } from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Category from '../../components/common/Category'
import Button from '../../components/common/Button'
import logoImg from '../../assets/img/FA_logo.png'
import theme from '../../styles/base/variable.js'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import { keyframes } from '@emotion/core'
import ActCard from '../../components/common/ActCard'
// import { keyframes } from "styled-components"

const HomeContainer = styled.div`
`

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.$colorYellow };
  border: 1px solid #000;
`

const ActContainer = styled.div`
  max-width: 1200px;
  font-family: ${({ theme }) => theme.$fontFamily};
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`


const Home = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <HomeContainer>
          <Header />
          <Carousel />
            <ActContainer>
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
              <ActCard />
            </ActContainer>
          <Footer />
        </HomeContainer>
      </ThemeProvider>
    </>
  )
}

export default Home