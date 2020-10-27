import React, { Component, useState } from 'react'
import Header from '../../components/common/Header'
import Footer from '../../components/common/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Category from '../../components/common/Category'
import Button from '../../components/common/Button'
import logoImg from '../../assets/img/FA_logo_bgwhite.png'
import { AiOutlineHeart } from 'react-icons/ai'
// import { AiFillHeart } from 'react-icons/ai'

const Home = () => {
  return (
    <>
      <div id="Home">
        <Header />
        <div className="HomeContainer">
          <div className="HomeContainer__Carousel">carousel</div>
          <Category />
          <div className="HomeContainer__ActPanel">
            <div className="ActPanel__Act">
              <Link className="Act__Cap">
                <img className="Cap__Img" src={logoImg} alt="活動" />
              </Link>
              <div className="Act__Footer">
                <div className="Footer__Title">這是一個活動標題這是一個活動標題</div>
                <div className="Footer__Detail">
                  <div className="Detail__LeftBlock">
                    <li className="Footer__Heart"><AiOutlineHeart /></li>
                    <li className="Footer__Date">2020/11/04</li>
                  </div>
                  <div className="Detail__RightBlock">
                    <Button text="詳細內容" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Home