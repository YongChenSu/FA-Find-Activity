import React, { Component, useState } from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Category from '../../components/common/Category'
import Button from '../../components/common/Button'

const Home = () => {
  return (
    <>
      <Header />
      <section id="home">
        <div className="carousel">
          carousel
        </div>
        <Category />
        <div>
          這是搜尋
        </div>
      </section>
      <Footer />
    </>
  )
}

export default Home