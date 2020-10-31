import React from 'react'
import { Link } from 'react-router-dom'
import { FaUserFriends } from 'react-icons/fa'
import styled from '@emotion/styled'

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 2rem 4rem;
`


const Category = () => {
  return (
    <div id="category">
      <Link to="activity" className="category__item"><FaUserFriends />聯誼</Link>
      <Link to="activity" className="category__item">講座</Link>
      <Link to="activity" className="category__item">旅行</Link>
      <Link to="activity" className="category__item">展覽</Link>
      <Link to="activity" className="category__item">美食</Link>
    </div>
  )
}

export default Category