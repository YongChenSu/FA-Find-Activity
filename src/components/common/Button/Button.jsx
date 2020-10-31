import styled from '@emotion/styled'

const Button = styled.button`
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.$colorRed};
  padding: 0.25rem 0.5rem;
  border: none;
  border-radius: ${({ theme }) => theme.$borderRadius };
  opacity: 0.8;
  position: relative;
  cursor: pointer;
  transition-duration: 0.3s;
  margin: 0 0.25rem;
  border: 1.5px solid ${({ theme }) => theme.$colorRed};

  &:focus {
    z-index: 1;
    outline: 0;
  }
`

export default Button