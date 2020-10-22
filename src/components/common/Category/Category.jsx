import React from 'react'
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <div className="category">
      <Link to="activity" className="category__item">聯誼</Link>
      <Link to="activity" className="category__item">講座</Link>
      <Link to="activity" className="category__item">旅行</Link>
      <Link to="activity" className="category__item">展覽</Link>
      <Link to="activity" className="category__item">美食</Link>
    </div>
  )
}

export default Category