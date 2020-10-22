import React, { Component, useState } from 'react'
import Header from '../../components/common/Header'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Category from '../../components/common/Category'

const Home = () => {
  return (
    <>
      <Header />
      <section id="home">
        <div className="carousel">
          carousel
        </div>
        <Category />
      </section>
      {/* <Footer /> */}
    </>
  )
}

export default Home