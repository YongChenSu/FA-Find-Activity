import React, { useCallback } from "react";
import styled from "@emotion/styled";
import {
  MEDIA_QUERY_CATEGORY,
  MEDIA_QUERY_SM,
  MEDIA_QUERY_MD,
} from "../../../styles/base/constants";
import { FaMusic, FaChild, FaBook, FaDoorOpen } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 80%;
  justify-content: space-around;
  padding: 2rem 0;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.$fontFamily};

  ${MEDIA_QUERY_CATEGORY} {
    flex-direction: row;
  }
`;

const CategoryItemRed = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: ${({ theme }) => theme.$colorRed};
  color: ${({ theme }) => theme.$colorWhite};
  border-radius: 8px;
  font-size: 1.5rem;
  border: 4px solid ${({ theme }) => theme.$colorYellow};
  margin: 0.25rem;

  cursor: pointer;

  svg {
    font-size: 1.5rem;
    margin: 0.5rem;
    color: ${({ theme }) => theme.$colorWhite};
  }

  &:focus {
    box-shadow: 0 0 1px 2.5px ${({ theme }) => theme.$colorGreen};
    outline: 0;
    z-index: 1;
  }

  &:hover {
    transition-duration: 0.1s;
    box-shadow: 0px 0px 2px 1px ${({ theme }) => theme.$colorYellow};

    div,
    svg {
      transition-duration: 0.1s;
      transform: scale(1.05);
    }
  }

  ${MEDIA_QUERY_CATEGORY} {
    //490
    flex-direction: column;
    border-radius: 50%;

    height: 4rem;
    width: 4rem;
    font-size: 1rem;

    svg {
      margin: 0.5rem 0 0.25rem 0;
      font-size: 1.5rem;
    }
  }

  ${MEDIA_QUERY_SM} {
    //576
    border-radius: 50%;
    height: 5.25rem;
    width: 5.25rem;
    font-size: 1rem;

    svg {
      font-size: 1.75rem;
    }
  }

  ${MEDIA_QUERY_MD} {
    height: 7rem;
    width: 7rem;
    font-size: 1.25rem;

    svg {
      font-size: 3rem;
    }
  }
`;

const CategoryItemGreen = styled(CategoryItemRed)`
  background-color: ${({ theme }) => theme.$colorGreen};
`;

const musicCategoryNum = 1;
const parentChildCategoryNum = 4;
const exhibitionCategoryNum = 6;
const lectureCategoryNum = 7;
const movieCategoryNum = 8;

const Category = ({ handleChangeCategory }) => {
  return (
    <CategoryContainer>
      <CategoryItemRed
        onClick={useCallback(() => handleChangeCategory(lectureCategoryNum))}
      >
        <FaBook />
        <div>講座</div>
      </CategoryItemRed>

      <CategoryItemGreen
        onClick={useCallback(() => handleChangeCategory(musicCategoryNum))}
      >
        <FaMusic />
        <div>音樂</div>
      </CategoryItemGreen>

      <CategoryItemRed
        onClick={useCallback(() =>
          handleChangeCategory(parentChildCategoryNum)
        )}
      >
        <FaChild />
        <div>親子</div>
      </CategoryItemRed>

      <CategoryItemGreen
        onClick={useCallback(() => handleChangeCategory(exhibitionCategoryNum))}
      >
        <FaDoorOpen />
        <div>展覽</div>
      </CategoryItemGreen>

      <CategoryItemRed
        onClick={useCallback(() => handleChangeCategory(movieCategoryNum))}
      >
        <BiCameraMovie />
        <div>電影</div>
      </CategoryItemRed>
    </CategoryContainer>
  );
};

export default Category;
