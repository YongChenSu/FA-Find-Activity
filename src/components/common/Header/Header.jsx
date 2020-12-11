import React, { useContext } from "react";
import SearchBar from "../SearchBar";
import LogoImg from "../../../assets/img/FA_logo_bgwhite.png";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../contexts";
import styled from "@emotion/styled";
import {
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
  MEDIA_QUERY_HEADER_WEBNAME,
} from "../../../styles/base/constants";

const HeaderContainer = styled.div`
  font-size: 1.25rem;
  position: fixed;
  display: flex;
  width: 100%;
  height: 4rem;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  font-family: ${({ theme }) => theme.$fontFamily};
  background-color: ${({ theme }) => theme.$colorWhite};
  z-index: 100;

  ${MEDIA_QUERY_LG} {
    font-size: 1.5rem;
  }
`;

const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  width: 80%;
  justify-content: center;
  align-items: center;

  ${MEDIA_QUERY_SM} {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const HeaderIntro = styled.div`
  display: flex;
  align-items: center;
`;

const LogoContainer = styled(Link)``;

const Logo = styled.img`
  cursor: pointer;
  height: 3rem;
  width: 3rem;

  border-radius: 50%;

  ${MEDIA_QUERY_MD} {
    height: 4rem;
    width: 4rem;
  }
`;

const WebnameContainer = styled.div`
  font-size: 1.25rem;
  font-weight: 500;
`;

const WebnameEnglish = styled.div`
  display: none;
  margin: 0.15rem 0.75rem;
  color: ${({ theme }) => theme.$colorRed};

  ${MEDIA_QUERY_MD} {
    display: flex;
  }
`;

const WebnameChinese = styled.div`
  margin: 0.15rem 0.75rem;
  color: ${({ theme }) => theme.$colorRed};
  font-weight: bold;
  display: none;

  ${MEDIA_QUERY_HEADER_WEBNAME} {
    display: flex;
  }
`;

const HeaderNav = styled.div`
  display: none;
  align-items: center;
  color: ${({ theme }) => theme.$colorGrey};
  box-sizing: border-box;

  ${MEDIA_QUERY_SM} {
    display: flex;
  }
`;

const HeaderFindActivity = styled(Link)`
  font-size: 1rem;
  width: 4rem;
  padding: 0.5rem;
  text-align: center;
  margin: 0.25rem;
  border-radius: ${({ theme }) => theme.$borderRadius};
  &:hover {
    background-color: ${({ theme }) => theme.$colorRed};
    border-radius: 0.5rem;
    opacity: 0.8;
    transition-duration: 0.1s;
    color: ${({ theme }) => theme.$colorWhite};
  }

  ${MEDIA_QUERY_MD} {
    width: 5rem;
    font-size: 1.25rem;
  }

  ${MEDIA_QUERY_LG} {
    width: 6rem;
    font-size: 1.5rem;
  }
`;

const HeaderHome = styled(HeaderFindActivity)``;

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

const Header = ({ handleUpdateInput }) => {
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
            <SearchBar handleUpdateInput={handleUpdateInput} />
          </HeaderIntro>
          <HeaderNav>
            <HeaderHome to="/">首頁</HeaderHome>
            <HeaderFindActivity to="/find-activity">找活動</HeaderFindActivity>
            <Profile to={user ? "/" : "/login-page"}>
              <FaUserCircle />
            </Profile>
          </HeaderNav>
        </HeaderWrapper>
      </HeaderContainer>
    </>
  );
};

export default Header;
