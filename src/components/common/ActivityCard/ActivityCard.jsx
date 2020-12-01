import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import Button from "../Button";
import logoImg from "../../../assets/img/FA_logo.png";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";

import { Skeleton } from "@material-ui/lab";

const ActivityCardContainer = styled(Link)`
  border-radius: ${({ theme }) => theme.$borderRadius};
  display: flex;
  width: 320px;
  margin: 1rem;
  flex-direction: column;
  box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.$fontFamily};

  &:hover {
    transition-duration: 0.7s;
    transform: translate(-5px, -5px);
    box-shadow: 5px 5px 10px 2px rgba(0, 0, 0, 0.3);

    button {
      transition-duration: 0.7s;
      transform: scale(1.1);
      color: ${({ theme }) => theme.$colorWhite};
      border-color: ${({ theme }) => theme.$colorRed};
      background-color: ${({ theme }) => theme.$colorRed};
      border: 0;
    }
  }
`;

const ActivityCap = styled.div`
  height: 220px;
`;

const ActivityImg = styled.img`
  border-top-left-radius: ${({ theme }) => theme.$borderRadius};
  border-top-right-radius: ${({ theme }) => theme.$borderRadius};
  height: 220px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const ActivityFooter = styled.div`
  max-height: 100%;
  padding: 0.75rem;
  border-bottom-left-radius: ${({ theme }) => theme.$borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.$borderRadius};
`;

const ActivityTitle = styled.div`
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 3.25rem;
  font-size: 1.25rem;
  line-height: 1.25rem;
  margin: 0.25rem 0;
`;

const ActivityLocation = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.$colorRed};
    margin: 0 0.25rem 0 0;
  }
`;

const ActivityDescription = styled.div`
  text-align: justify;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin: 0.25rem 0.25rem 1rem 0;
  color: ${({ theme }) => theme.$colorLightGrey};
`;

const ActivityDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActivityDetailLeftBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

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
`;

const Date = styled.div`
  margin: 0.5rem;
  color: ${({ theme }) => theme.$colorGrey};
`;

const ActivityCard = ({
  title,
  time,
  locationName,
  description,
  imageUrl,
  id,
}) => {
  let [isAddToFavorite, setIsAddToFavorite] = useState(true);
  let [isSkeleton, setIsSkeleton] = useState(true);
  useEffect(() => {
    setTimeout(() => setIsSkeleton(false), 1500);
  }, []);

  return (
    <>
      <ActivityCardContainer to={`/activity/${id}`}>
        {isSkeleton ? (
          <Skeleton
            animation="wave"
            variant="rect"
            width={320}
            height={220}
          ></Skeleton>
        ) : (
          <ActivityCap>
            <ActivityImg src={imageUrl} alt="活動" />
          </ActivityCap>
        )}
        <ActivityFooter>
          <ActivityTitle>{title}</ActivityTitle>
          <ActivityLocation>
            <GoLocation />
            {locationName}
          </ActivityLocation>
          <ActivityDescription>{description}</ActivityDescription>
          <ActivityDetail>
            <ActivityDetailLeftBlock>
              <Link>
                <HeartIcon onClick={() => setIsAddToFavorite(!isAddToFavorite)}>
                  {isAddToFavorite ? <AiOutlineHeart /> : <AiFillHeart />}
                </HeartIcon>
              </Link>
              <Date>{time}</Date>
            </ActivityDetailLeftBlock>
            <Button>詳細內容</Button>
          </ActivityDetail>
        </ActivityFooter>
        {/* <HollowHeartIcon /> */}
      </ActivityCardContainer>
    </>
  );
};

export default ActivityCard;
