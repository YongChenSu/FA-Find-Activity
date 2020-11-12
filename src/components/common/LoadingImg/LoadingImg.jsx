import React from "react";
import styled from "@emotion/styled";
import logoImg from "../../../assets/img/FA_logo.png";

const Img = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  animation: bigger infinite 0.5s linear;
  border-radius: 50%;

  @keyframes bigger {
    50% {
      transform: scale(1.02);
    }
  }
`;

const LoadingImgWrapper = styled.div`
  border-radius: 50%;
  animation: pulse infinite 0.5s linear;
  box-shadow: 0 0 0 0.5rem ${({ theme }) => theme.$colorRed};

  @keyframes pulse {
    50% {
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
`;

const LoadingImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 9.5rem);
  padding: 4rem 0 0 0;
`;

const LoadingImg = () => {
  return (
    <>
      <LoadingImgContainer>
        <LoadingImgWrapper>
          <Img src={logoImg} />
        </LoadingImgWrapper>
      </LoadingImgContainer>
    </>
  );
};

export default LoadingImg;
