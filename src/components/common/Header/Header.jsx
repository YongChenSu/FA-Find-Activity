import React, { useState, useContext } from "react";
import SearchBar from "../SearchBar";
import LogoImg from "../../../assets/img/FA_logo_bgwhite.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../contexts";
import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  position: fixed;
  display: flex;
  width: 100%;
  height: 4rem;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-size: 1.5rem;
  font-family: ${({ theme }) => theme.$fontFamily};
  background-color: ${({ theme }) => theme.$colorWhite};
  z-index: 100;
`;

const HeaderWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  width: 80%;
  justify-content: space-between;
`;

const HeaderIntro = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(Link)``;

const Logo = styled.img`
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

const WebnameContainer = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const WebnameEnglish = styled.div`
  margin: 0.15rem 0.75rem;
  color: ${({ theme }) => theme.$colorRed};
`;

const WebnameChinese = styled.div`
  margin: 0.15rem 0.75rem;
  color: ${({ theme }) => theme.$colorRed};
  font-weight: bold;
`;

const HeaderNav = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.$colorGrey};
  box-sizing: border-box;
`;

const HeaderHome = styled(Link)`
  padding: 0.5rem;
  text-align: center;
  width: 7rem;
  margin: 0.25rem;
  border-radius: ${({ theme }) => theme.$borderRadius};
  &:hover {
    background-color: ${({ theme }) => theme.$colorRed};
    border-radius: 0.5rem;
    opacity: 0.8;
    transition-duration: 0.1s;
    color: ${({ theme }) => theme.$colorWhite};
  }
`;

const HeaderNewActivity = styled(HeaderHome)``;

const Profile = styled(Link)`
  svg {
    color: ${({ theme }) => theme.$colorRed};
    width: 4.5rem;
    height: 4.5rem;
    padding: 1rem;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

const Header = () => {
  const [isShowNewActivity] = useState(true);
  const { user, setUser } = useContext(AuthContext);

  return (
    <>
      <HeaderContainer>
        <HeaderWrapper>
          <HeaderIntro>
            <LogoContainer to="/">
              <Logo src={LogoImg} />
            </LogoContainer>
            <WebnameContainer>
              <WebnameEnglish>Find Activity</WebnameEnglish>
              <WebnameChinese>找活動</WebnameChinese>
            </WebnameContainer>
            <SearchBar />
          </HeaderIntro>
          <HeaderNav>
            <HeaderHome to="/find-activity">找活動</HeaderHome>
            {isShowNewActivity ? (
              <HeaderNewActivity to="/new-activity">建立活動</HeaderNewActivity>
            ) : (
              ""
            )}
            <Profile to={user ? "/profile-page" : "/login-page"}>
              <FaUserCircle />
            </Profile>
          </HeaderNav>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
