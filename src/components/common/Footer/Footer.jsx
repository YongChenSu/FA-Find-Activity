import React from "react";
import Button from "../Button";
import styled from "@emotion/styled";
import LogoImg from "../../../assets/img/FA_logo.png";
import { AiFillGithub } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { ImMail4 } from "react-icons/im";

const Container = styled.div`
  font-family: ${({ theme }) => theme.$fontFamily};
  color: ${({ theme }) => theme.$colorRed};
  background-color: ${({ theme }) => theme.$colorLightOrange};
`;

const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const Info = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FanPage = styled.div`
  color: ${({ theme }) => theme.$colorRed};
  background-color: ${({ theme }) => theme.$colorYellow};
  height: 80px;
  width: 180px;
  border-radius: ${({ theme }) => theme.$borderRadius};
`;

const Website = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

const Logo = styled.img`
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`;

const WebNameEnglish = styled.div`
  margin: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.$colorRed};
  display: flex;
  align-items: center;
`;

const Contact = styled.ul`
  display: flex;
  flex-direction: column;
  width: 220px;
`;

const ContactButton = styled(Button)`
  margin: 0 0 0.75rem 0;
  background-color: ${({ theme }) => theme.$colorRed};
  color: ${({ theme }) => theme.$colorWhite};
  text-align: center;
`;

const Anchor = styled.a``;

const Media = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    cursor: pointer;
    width: 2.5rem;
    height: 2.5rem;
    color: ${({ theme }) => theme.$colorRed};
  }
`;

const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.$colorWhite};
  height: 1.5rem;
  background-color: ${({ theme }) => theme.$colorRed};
  font-family: ${({ theme }) => theme.$fontFamily};
`;

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Info>
            <FanPage />
            <Website>
              <Logo src={LogoImg} />
              <WebNameEnglish>FA Find Activity</WebNameEnglish>
            </Website>
            <Contact>
              <ContactButton
                as="a"
                href="https://github.com/YongChenSu"
                target="_blank"
                rel="noreferrer noopener"
              >
                聯絡網站製作者
              </ContactButton>
              <Media>
                <Anchor href="https://github.com/YongChenSu/FA-Find-Activity">
                  <AiFillGithub />
                </Anchor>
                <Anchor href="https://www.facebook.com/zhenxuan.su/">
                  <FaFacebook />
                </Anchor>
                <ImMail4 />
              </Media>
            </Contact>
          </Info>
        </Wrapper>
      </Container>
      <Copyright>Copyright © 2020 Find Activity Reserved.</Copyright>
    </>
  );
};

export default Footer;
