import React from "react";
import { Link } from "react-router-dom";
import { FaUserFriends } from "react-icons/fa";
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
  font-size: 2rem;
  border: 4px solid ${({ theme }) => theme.$colorYellow};

  &:focus {
    box-shadow: 0 0 1px 2.5px ${({ theme }) => theme.$colorGreen};
    outline: 0;
    z-index: 1;
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
        <CategoryItemRed onClick={handleChangeLecture}>講座</CategoryItemRed>
      </Link>
      <Link to="find-activity">
        <CategoryItemGreen>音樂</CategoryItemGreen>
      </Link>
      <Link to="find-activity">
        <CategoryItemRed>親子</CategoryItemRed>
      </Link>
      <Link to="find-activity">
        <CategoryItemGreen>展覽</CategoryItemGreen>
      </Link>
      <Link to="find-activity">
        <CategoryItemRed>電影</CategoryItemRed>
      </Link>
    </CategoryContainer>
  );
};

export default Category;
