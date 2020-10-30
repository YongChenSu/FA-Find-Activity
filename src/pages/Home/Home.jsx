import React from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import Button from '../../components/common/Button'
import theme from '../../styles/base/variable.js'
import styled from '@emotion/styled'
import { ThemeProvider } from 'emotion-theming'
import ActCard from '../../components/common/ActCard'
import { FaAngleDoubleRight } from 'react-icons/fa'

const HomeContainer = styled.div`
  font-family: ${({ theme}) => theme.main.$fontFamily};
`

const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 500px;
  background-color: ${({ theme }) => theme.main.$colorYellow };
  border: 1px solid #000;
`

const ActContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`

const MoreActButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 2rem 0;
  height: 3rem;
`

const MoreActButton = styled(Button)`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.main.$colorWhite};
    box-shadow: inset 22rem 0 0 0 ${({ theme }) => theme.main.$colorRed};
    border: 0;
  }

  svg {
    margin: 0 0.5rem;
  }
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
            <MoreActButtonContainer>
              <MoreActButton>
                尋找更多活動
                <FaAngleDoubleRight />
              </MoreActButton>
            </MoreActButtonContainer>
          <Footer />
        </HomeContainer>
      </ThemeProvider>
    </>
  )
}

export default Home