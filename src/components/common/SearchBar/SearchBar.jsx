import React from "react";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";

const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;

  svg {
    color: ${({ theme }) => theme.$colorGrey};
  }
`;

const SearchInput = styled.input`
  border-radius: 3px;
  padding: 1px 5px;
  border: 1px solid ${({ theme }) => theme.$colorLightGrey};
  width: 250px;
  height: 35px;
  font-size: 1rem;
  color: ${({ theme }) => theme.$colorGreen};
  font-family: ${({ theme }) => theme.$fontFamily};
  margin: 0 0.5rem;

  &:focus {
    outline: 0;
    box-shadow: 0 0 1px 1px ${({ theme }) => theme.$colorGrey};
    border: 0;
  }
`;

const SearchBar = () => {
  return (
    <>
      <SearchBarContainer action="">
        <FaSearch />
        <SearchInput
          id="searchBar"
          type="text"
          name="search"
          placeholder="Find what you like"
        />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
