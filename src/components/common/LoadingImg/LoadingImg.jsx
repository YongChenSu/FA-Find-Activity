import React from "react";
import styled from "@emotion/styled";
import logoImg from "../../../assets/img/FA_logo.png";

const LoadingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 12rem);
  padding: 4rem 0 0 0;
`;

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;

const LoadingImg = () => {
  return (
    <>
      <LoadingImgContainer>
        <Img src={logoImg} />
      </LoadingImgContainer>
    </>
  );
};

export default LoadingImg;
