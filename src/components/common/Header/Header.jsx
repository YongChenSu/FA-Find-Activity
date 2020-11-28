import React, { useState, useContext } from "react";
import SearchBar from "../SearchBar";
import LogoImg from "../../../assets/img/FA_logo_bgwhite.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../contexts";

const Header = (props) => {
  const [isShowNewActivity] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <header id="header">
        <div className="flex wrap">
          <div className="header__intro">
            <Link to="/">
              <img src={LogoImg} className="intro__logo" />
            </Link>
            <div className="intro__webname">
              <div className="webname__english">Find Activity</div>
              <div className="webname__chinese">找活動</div>
            </div>
            <SearchBar />
          </div>
          <div className="header__nav">
            <Link to="/find-activity" className="nav__home">
              找活動
            </Link>
            {isShowNewActivity ? (
              <Link to="/new-activity" className="nav__newActivity">
                建立活動
              </Link>
            ) : (
              ""
            )}

            <Link
              to={user ? "/profile-page" : "/login-page"}
              className="proflie"
            >
              <FaUserCircle />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
