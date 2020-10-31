import React from 'react'
import styled from '@emotion/styled'
import theme from '../../styles/base/variable.js'
import { ThemeProvider } from 'emotion-theming'
import Button from '../../components/common/Button'
import Header from '../../components/common/Header'
import Category from '../../components/common/Category'
import ActCard from '../../components/common/ActCard'
import Footer from '../../components/common/Footer'
import { FaAngleDoubleRight } from 'react-icons/fa'
import LogoImg from '../../assets/img/FA_logo.png'

const ActivityContainer = styled.div`
  padding-top: 4rem;
`

const ActContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const SelectContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const Select = styled.select`
  width: 200px;
  height: 2.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.$colorRed};
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius };
  opacity: 0.8;
  position: relative;
  margin: 1rem;
  border: 1.5px solid ${({ theme }) => theme.$colorRed};
  
  &:focus {
    outline: 0;
  }
`

const Option = styled.option`
  color: black;
  background: white;
  font-weight: small;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`

const MoreActButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2rem 0;
  height: 3rem;
`

const MoreActButton = styled(Button)`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: ${({ theme }) => theme.$colorWhite};
    box-shadow: inset 22rem 0 0 0 ${({ theme }) => theme.$colorRed};
    border: 0;
  }

  svg {
    margin: 0 0.5rem;
  }
`

const Activity = () => {
  return (
    <>
      <ThemeProvider theme={theme.main}>
        <Header />
        <ActivityContainer>
          <Category />
          <SelectContainer>
            <Select>
              <Option value="" hidden>活動日期</Option>
              <Option value="1" >2020/11</Option>
              <Option value="2" >2020/12</Option>
              <Option value="3" >2021/01</Option>
            </Select>
            <Select>
              <Option value="" hidden>活動地點</Option>
              <Option value="1" >北部</Option>
              <Option value="2" >中部</Option>
              <Option value="3" >南部</Option>
              <Option value="4" >東部、離島</Option>
            </Select>
            <Select>
              <Option value="" hidden>活動價格</Option>
              <Option value="1" >500 ↓</Option>
              <Option value="2" >500~1000</Option>
              <Option value="3" >1000~2000</Option>
              <Option value="2" >2000 ↑</Option>
            </Select>
          </SelectContainer>
          <ActContainer>
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
        </ActivityContainer>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Activity 