import React, { useState, useEffect } from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "@emotion/styled";
import {
  MEDIA_QUERY_XS,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
  MEDIA_QUERY_LG,
} from "../../../styles/base/constants";
import Button from "../Button";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { Skeleton } from "@material-ui/lab";

const ActivityCardContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 125px;
  border-radius: ${({ theme }) => theme.$borderRadius};
  margin: 1rem 0;
  box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.15);
  font-family: ${({ theme }) => theme.$fontFamily};

  button {
    width: 5.25rem;
    font-size: 0.75rem;
  }

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

  ${MEDIA_QUERY_SM} {
    height: 185px;

    button {
      width: 6rem;
      font-size: 1rem;
    }
  }

  ${MEDIA_QUERY_LG} {
    flex-direction: column;
    width: 320px;
    height: 410px;
    margin: 1rem;
  }
`;

const ActivityCap = styled.div`
  width: 100px;

  ${MEDIA_QUERY_SM} {
    width: 180px;
  }

  ${MEDIA_QUERY_MD} {
    width: 195px;
  }

  ${MEDIA_QUERY_LG} {
    width: 320px;
    height: 220px;
  }
`;

const ActivityImg = styled.img`
  border-top-left-radius: ${({ theme }) => theme.$borderRadius};
  border-bottom-left-radius: ${({ theme }) => theme.$borderRadius};
  height: 100%;
  width: 100px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  ${MEDIA_QUERY_SM} {
    width: 180px;
  }

  ${MEDIA_QUERY_MD} {
    width: 195px;
  }

  ${MEDIA_QUERY_LG} {
    height: 220px;
    width: 320px;
    border-bottom-left-radius: 0;
    border-top-right-radius: ${({ theme }) => theme.$borderRadius};
  }
`;

const ActivityFooter = styled.div`
  width: 55%;
  padding: 0.5rem;
  border-bottom-left-radius: ${({ theme }) => theme.$borderRadius};
  border-bottom-right-radius: ${({ theme }) => theme.$borderRadius};

  ${MEDIA_QUERY_XS} {
    padding: 0.75rem;
    width: 100%;
  }
`;

const ActivityTitleContainer = styled.div`
  height: 3.25rem;
`;

const ActivityTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow: hidden;
  word-break: break-word;
  font-size: 1rem;

  ${MEDIA_QUERY_SM} {
    font-size: 1.25rem;
    line-height: 1.25rem;
    margin: 0.25rem 0;
  }
`;

const ActivityLocation = styled.div`
  align-items: center;
  margin: 0 0 0.25rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-align: justify;
  overflow: hidden;
  word-break: break-word;

  svg {
    color: ${({ theme }) => theme.$colorRed};
    margin: 0 0.25rem 0 0;
  }
`;

const ActivityDescription = styled.div`
  display: none;
  margin: 0.25rem 0.25rem 1rem 0;
  color: ${({ theme }) => theme.$colorLightGrey};

  ${MEDIA_QUERY_SM} {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-align: justify;
    overflow: hidden;
    word-break: break-word;
  }
`;

const ActivityDetail = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ActivityDetailLeftBlock = styled.div`
  display: flex;
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
  display: none;
  margin: 0.5rem;
  color: ${({ theme }) => theme.$colorGrey};

  ${MEDIA_QUERY_SM} {
    display: flex;
  }
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
    setTimeout(() => setIsSkeleton(false), 2000);
  }, []);

  return (
    <>
      <ActivityCardContainer to={`/activity/${id}`}>
        {isSkeleton ? (
          <Skeleton
            animation="wave"
            variant="rect"
            width={320}
            height={"100%"}
          ></Skeleton>
        ) : (
          <ActivityCap>
            <ActivityImg src={imageUrl} alt="活動" />
          </ActivityCap>
        )}
        <ActivityFooter>
          <ActivityTitleContainer>
            <ActivityTitle>{title}</ActivityTitle>
          </ActivityTitleContainer>
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
