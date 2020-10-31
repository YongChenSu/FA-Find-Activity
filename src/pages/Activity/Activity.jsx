import React from 'react'
import styled from '@emotion/styled'
import theme from '../../styles/base/variable.js'
import { ThemeProvider } from 'emotion-theming'
import Button from '../../components/common/Button'
import Header from '../../components/common/Header'
import Category from '../../components/common/Category'
import ActCard from '../../components/common/ActCard'
import Footer from '../../components/common/Footer'

const ActContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

const Activity = () => {
  return (
    <>
      <Category />
      <ActContainer>
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
        <ActCard />
      </ActContainer>
    </>
  )
}

export default Activity 