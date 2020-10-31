import styled from '@emotion/styled'
import React from 'react'
import { AiFillGithub } from 'react-icons/ai'
import { FaFacebook } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import LogoImg from '../../../assets/img/FA_logo.png'
import Button from '../Button'

const Container = styled.div`
  font-family: $font-family;
  color: ${({theme}) => theme.main.$colorRed};
  background-color: ${({theme}) => theme.main.$colorLightOrange};
`

const Wrapper = styled.div`
  width: 80%;
  display: flex;
  margin: 0 auto;
`

const Info = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const FanPage = styled.div`
  color: ${({theme}) => theme.main.$colorRed};
  background-color: ${({ theme }) => theme.main.$colorYellow};
  height: 100px;
  width: 200px;
`

const Website = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`

const Logo = styled.img`
  cursor: pointer;
  height: 4rem;
  width: 4rem;
  border-radius: 50%;
`

const WebNameEnglish = styled.div`
  margin: 0.5rem 0.75rem;
  color: ${({theme}) => theme.main.$colorRed};
  display: flex;
  align-items: center;
`

const Contact = styled.ul`
  display: flex;
  flex-direction: column;
  width: 220px;
`

const ContactButton = styled(Button)`
  margin: 0 0 0.75rem 0;
  background-color: ${({theme}) => theme.main.$colorRed};
  color:  ${({theme}) => theme.main.$colorWhite};
`

const Media = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    width: 2.5rem;
    height: 2.5rem;
  }
`



const Copyright = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: ${({ theme }) => theme.main.$colorWhite};
  height: 2rem;
  background-color: ${({theme}) => theme.main.$colorRed};
`

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
                <ContactButton>聯絡網站製作者</ContactButton>
                <Media>
                  <AiFillGithub />
                  <FaFacebook />
                  <ImMail4 />
                </Media>
              </Contact>
            </Info>
          </Wrapper>
        </Container>
        <Copyright>Copyright © 2020 Find Activity Reserved.</Copyright>
    </>
  )
}

export default Footer