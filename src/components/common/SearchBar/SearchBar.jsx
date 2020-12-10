import React, { useState } from "react";
import styled from "@emotion/styled";
import { FaSearch } from "react-icons/fa";
import { MEDIA_QUERY_MD } from "../../../styles/base/constants";

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
  max-width: 250px;
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

  ${MEDIA_QUERY_MD} {
    width: 250px;
  }
`;

const SearchBar = ({ handleUpdateInput }) => {
  return (
    <>
      <SearchBarContainer action="">
        <FaSearch />
        <SearchInput
          placeholder="Find what you like"
          onChange={handleUpdateInput}
        />
      </SearchBarContainer>
    </>
  );
};

export default SearchBar;
