import React, { Component, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from '@emotion/styled'
import Button from '../Button'
import logoImg from '../../../assets/img/FA_logo.png'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

const Act = styled.div`
  border-radius: ${({ theme }) => theme.$borderRadius };
  display: flex;
  max-width: 350px;
  margin: 1rem;
  flex-direction: column;
  box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.15);
  font-family: ${({theme}) => theme.$fontFamily};

  &:hover {
    transition-duration: 0.3s;
    transform: translate(-5px,-5px);
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);

    button {
      transform: scale(1.1);
      color: ${({ theme }) => theme.$colorWhite};
      box-shadow: inset -3.5rem 0 0 0 ${({ theme }) => theme.$colorRed}, inset 3.5rem 0 0 0 ${({ theme }) => theme.$colorRed};
      border-color: ${({ theme }) => theme.$colorRed};
      border: 0;
    }
  }
`

const ActCap = styled.div`
  height: 220px;
`

const ActImg = styled.img`
  border-top-left-radius: ${({ theme }) => theme.$borderRadius };
  border-top-right-radius: ${({ theme }) => theme.$borderRadius };
  max-height: 100%; 
`

const ActFooter = styled.div`
  max-height: 100%;
  padding: 0.5rem;
  border-bottom-left-radius: ${({ theme }) => theme.$borderRadius };
  border-bottom-right-radius: ${({ theme }) => theme.$borderRadius };
`

const ActTitle = styled.div`
  font-size: 1.25rem;
  margin: 0 0 1rem 0; 
`

const ActDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ActDetailLeftBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

const HeartIcon = styled.div`
  background-color: transparent;
  border: 0;
  padding: 0 0.25rem;
  &:focus {
    outline: 0;
  }

  svg {
    cursor: pointer;
    display: flex;
    color: ${({ theme }) => theme.$colorRed};
    width: 2rem;
    height: 2rem;
  }
`

const Date = styled.div`
  margin: 0.5rem;
  color: ${({ theme }) => theme.$colorGrey};
`

const ActCard = () => {
  let [isAddToFavorite, setIsAddToFavorite] = useState(true)
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Act>
        <Link to='/Activity'>
        <ActCap>
          <ActImg src={logoImg} alt="活動" />
        </ActCap>
        <ActFooter>
          <ActTitle>這是一個活動標題這是一個活動標題這是一個活動標題</ActTitle>
          <ActDetail>
            <ActDetailLeftBlock>
              <Link>
                <HeartIcon onClick={() => setIsAddToFavorite(!isAddToFavorite)}>
                  {isAddToFavorite
                    ? <AiOutlineHeart />
                    : <AiFillHeart />
                  }
                </HeartIcon>
              </Link>
              <Date>2020/10/25</Date>
            </ActDetailLeftBlock>
            <Button>詳細內容</Button>
          </ActDetail>
        </ActFooter>
        {/* <HollowHeartIcon /> */}
        </Link>
      </Act>
    </>
  )
}

export default ActCard
