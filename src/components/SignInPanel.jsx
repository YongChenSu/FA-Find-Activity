import React, { useState, useContext } from "react";
import styled from "@emotion/styled";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts";
import { setAuthToken } from "../utils/utils";
import { login, getMe } from "../WebAPI";

import { MdEmail } from "react-icons/md";
import { TiKey, TiUserAdd } from "react-icons/ti";
import { FaSignInAlt } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 450px;
  height: 100%;
`;

const Form = styled.form`
  width: 340px;
  height: 100%;
  background-color: #f8f8f8;
  border-radius: ${({ theme }) => theme.$borderRadius};
  box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.15);
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const InputWrapper = styled.div``;
const ButtonWrapper = styled.div`
  margin: 0 0 1rem 0;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 1rem 0;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.$colorLightOrange};
  background-color: ${({ theme }) => theme.$colorLightOrange};

  svg {
    height: 1.5rem;
    width: 1.5rem;
    margin: 0 0.5rem;
    color: ${({ theme }) => theme.$colorRed};
  }
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  border-radius: 4px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border: 0px;
  background-color: ${({ theme }) => theme.$colorWhite};

  ::placeholder {
    color: ${({ theme }) => theme.$colorLightGrey};
  }

  &:focus {
    outline: 0;
  }
`;

const SignInSignUpContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.25rem 0rem 2rem 0rem;

  svg {
    margin: 0 0.5rem 0 0;
  }
`;

const SignInLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1.5px solid ${({ theme }) => theme.$colorLightGrey};
  padding: 0 1.5rem 0 0;
  color: ${({ theme }) => theme.$colorRed};
`;

const SignUpLink = styled(SignInLink)`
  border-right: 0;
  border-left: 1.5px solid ${({ theme }) => theme.$colorLightGrey};
  padding: 0 0 0 1.5rem;
  color: ${({ theme }) => theme.$colorLightGrey};
`;

const SignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.$colorWhite};
  width: 100%;
  height: 2.5rem;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  border-radius: 4px;
  border: 0;
  background-color: ${({ theme }) => theme.$colorRed};
  transition-duration: 0.3s;
  margin: 0 0 1rem 0;

  &:hover {
    background-color: #d86d63;
    color: #fff;
    cursor: pointer;
  }

  &:focus {
    outline: 0;
  }
`;

const GoogleSignButton = styled(SignInButton)`
  margin: 0;
  color: ${({ theme }) => theme.$colorRed};
  background-color: ${({ theme }) => theme.$colorWhite};
  border: 1px solid ${({ theme }) => theme.$colorLightOrange};

  &:hover {
    border: 1px solid ${({ theme }) => theme.$colorRed};
    background-color: ${({ theme }) => theme.$colorWhite};
    color: ${({ theme }) => theme.$colorRed};
  }

  svg {
    margin: 0 1rem 0 0;
  }
`;

const ErrMessage = styled.div`
  color: red;
`;

const SignInPanel = ({ handleToggleSignInUp }) => {
  const { setUser } = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMessage, setErrMessage] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    setErrMessage(null);
    login(username, password).then((data) => {
      if (data.ok === 0) {
        return setErrMessage(data.message);
      }
      setAuthToken(data.token);

      getMe().then((response) => {
        if (response.ok !== 1) {
          setAuthToken(null);
          return setErrMessage(response.toString());
        }
        setUser(response.data);
        history.push("/");
      });
    });
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <SignInSignUpContainer>
            <SignInLink>
              <FaSignInAlt />
              登入
            </SignInLink>
            <SignUpLink onClick={handleToggleSignInUp}>
              <TiUserAdd />
              註冊
            </SignUpLink>
          </SignInSignUpContainer>

          <InputContainer>
            <MdEmail />
            <Input
              placeholder="使用者"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <TiKey />
            <Input
              placeholder="密碼"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
        </InputWrapper>
        <ButtonWrapper>
          <SignInButton>登入</SignInButton>
          {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
        </ButtonWrapper>
      </Form>
    </FormContainer>
  );
};

export default SignInPanel;
