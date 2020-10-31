import React, { Component, useState } from 'react'
import SearchBar from '../SearchBar'
import LogoImg from '../../../assets/img/FA_logo_bgwhite.png'
import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const Header = (props) => {
  // const getPath = () => {
  //   console.log(window.location.href)
  // }
  const [isShowNewActivity] = useState(true)
  const [isLogin] = useState(true)

  return (
    <>
      <header id="header">
        <div className="flex wrap">
          <div className="header__intro">
            <Link to='/'>
              <img src={LogoImg} className="intro__logo"></img>
            </Link>
            <div className="intro__webname">
              <div className="webname__engligh">Find Activity</div>
              <div className="webname__chinese">找活動</div>
            </div>
            <SearchBar />
          </div>
          <div className="header__nav">
            <Link to='/activity' className="nav__home">找活動</Link>
            {isShowNewActivity
              ? <Link to='/newActivity' className="nav__newActivity">建立活動</Link>
              : ''
            }
            {isLogin
              ? <Link to='/profile' className="proflie"><FaUserCircle /></Link>
              : ''
            }

          </div>
        </div>
      </header>
    </>
  )
}

export default Header