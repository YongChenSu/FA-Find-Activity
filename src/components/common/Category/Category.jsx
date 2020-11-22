import React from "react";
import { Link } from "react-router-dom";
import {
  FaUserFriends,
  FaMusic,
  FaChild,
  FaBook,
  FaDoorOpen,
} from "react-icons/fa";
import { BiCameraMovie } from "react-icons/bi";

import styled from "@emotion/styled";

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
  height: 7rem;
  width: 7rem;
  background-color: ${({ theme }) => theme.$colorRed};
  color: ${({ theme }) => theme.$colorWhite};
  border-radius: 50%;
  font-size: 1.25rem;
  border: 4px solid ${({ theme }) => theme.$colorYellow};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:focus {
    box-shadow: 0 0 1px 2.5px ${({ theme }) => theme.$colorGreen};
    outline: 0;
    z-index: 1;
  }

  svg {
    font-size: 3rem;
    margin: 0.5rem 0 0.25rem 0;
    color: ${({ theme }) => theme.$colorWhite};
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
`;

const CategoryItemGreen = styled(CategoryItemRed)`
  background-color: ${({ theme }) => theme.$colorGreen};
`;

const Category = () => {
  const handleChangeLecture = () => {};

  return (
    <CategoryContainer>
      <Link to="find-activity">
        <CategoryItemRed onClick={handleChangeLecture}>
          <FaBook />
          <div>講座</div>
        </CategoryItemRed>
      </Link>
      <Link to="find-activity">
        <CategoryItemGreen>
          <FaMusic />
          <div>音樂</div>
        </CategoryItemGreen>
      </Link>
      <Link to="find-activity">
        <CategoryItemRed>
          <FaChild />
          <div>親子</div>
        </CategoryItemRed>
      </Link>
      <Link to="find-activity">
        <CategoryItemGreen>
          <FaDoorOpen />
          <div>展覽</div>
        </CategoryItemGreen>
      </Link>
      <Link to="find-activity">
        <CategoryItemRed>
          <BiCameraMovie />
          <div>電影</div>
        </CategoryItemRed>
      </Link>
    </CategoryContainer>
  );
};

export default Category;
