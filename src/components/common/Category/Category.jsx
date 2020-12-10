import React, { useCallback } from "react";
import styled from "@emotion/styled";
import { MEDIA_QUERY_MD } from "../../../styles/base/constants";
import { FaMusic, FaChild, FaBook, FaDoorOpen } from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

const CategoryContainer = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: space-around;
  padding: 2rem 4rem;
  margin: 0 auto;
  font-family: ${({ theme }) => theme.$fontFamily};
`;

const CategoryItemRed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5rem;
  width: 5rem;
  background-color: ${({ theme }) => theme.$colorRed};
  color: ${({ theme }) => theme.$colorWhite};
  border-radius: 50%;
  font-size: 1rem;
  border: 4px solid ${({ theme }) => theme.$colorYellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    font-size: 2.25rem;
    margin: 0.5rem 0 0.25rem 0;
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
