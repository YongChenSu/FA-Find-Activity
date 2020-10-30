import React from 'react';
import styled from '@emotion/styled'
// const Button = ({
//   text,
//   id,
//   onClick
// }) => {
//   return (
//     <button className="basic-btn" id={id} onClick={onClick}>{text}</button>
//   )
// }




const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.$colorWhite};
  background-color: ${({ theme }) => theme.$colorRed};
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius };
  opacity: 0.8;
  position: relative;
  cursor: pointer;
  transition-duration: 0.25s;
  margin: 0 0.25rem;
  &:hover {
    background-color: darken(${({ theme }) => theme.$colorWhite}, 8%);
    opacity: 1;
    transform: scale(1.05);
  }
  &:focus {
    box-shadow: 0 0 1px 2.5px rgba(${({ theme }) => theme.$colorWhite}, .5);
    z-index: 1;
    outline: 0;
  }
`

export default Button