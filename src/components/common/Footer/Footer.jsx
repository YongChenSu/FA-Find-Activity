import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import LogoImg from '../../../assets/img/FA_logo.png'

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div className="webCenter">
          <div className="footer__info">
            <div className="info__facebook">
              facebook fan page
          </div>
            <div className="info__webname">
              <img className="webname__logo" src={LogoImg} alt="FA 找活動" />
              <div className="webname__english">FA Find Activity</div>
            </div>
            <ul class="info__media">
              <AiFillGithub />
              <FaFacebook />
              <ImMail4 />
            </ul>
          </div>
        </div>
        <div className="copyright">Copyright © 2020 Find Activity Reserved.</div>
      </div>
    </>
  )
}

export default Footer