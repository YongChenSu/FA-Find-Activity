// import { useState, useContext } from "react";
// import styled from "styled-components";
// import { useHistory } from "react-router-dom";
// import { login, getMe } from "../../WebAPI";
// import { setAuthToken } from "../../utils/utils";
// import { AuthContext } from "../../contexts";
// import React from "react";

// const ErrMessage = styled.div`
//   color: red;
// `;

// const Form = styled.form`
//   width: 200px;
//   height: 300px;
//   background-color: #f8f8f8;
//   border-radius: ${({ theme }) => theme.$borderRadius};
//   border: 1px solid black;
// `;

// const Input = styled.div`
//   width: 100%;
//   height: 20px;
// `;

// const LoginPage = () => {
//   const { setUser } = useContext(AuthContext);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [errMessage, setErrMessage] = useState();
//   const history = useHistory();
//   const handleSubmit = (e) => {
//     setErrMessage(null);
//     login(username, password).then((data) => {
//       if (data.ok === 0) {
//         return setErrMessage(data.message);
//       }
//       setAuthToken(data.token);

//       getMe().then((response) => {
//         if (response.ok !== 1) {
//           setAuthToken(null);
//           return setErrMessage(response.toString());
//         }
//         setUser(response.data);
//         history.push("/");
//       });
//     });
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <div>
//         username:{" "}
//         <Input value={username} onChange={(e) => setUsername(e.target.value)} />
//       </div>
//       <div>
//         password:{" "}
//         <Input
//           type="password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//       </div>
//       <button>登入</button>
//       {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
//     </Form>
//   );
// };

// export default LoginPage;

import React, { useState } from "react";
import styled from "@emotion/styled";
import LogoImg from "../../assets/img/FA_logo.png";
import SignInPanel from "./SignInPanel";
import SignUpPanel from "./SignUpPanel";
import { AuthContext } from "../../../src/contexts";

const LoginPageContainer = styled.div`
  background-color: ${({ theme }) => theme.$colorWhite};
  height: 100vh;
  display: flex;
  align-items: center;
  font-family: ${({ theme }) => theme.$fontFamily};
  padding: 1rem;
`;

const LoginPageWrapper = styled.div`
  background-color: ${({ theme }) => theme.$colorLightOrange};
  display: flex;
  max-width: 1200px;
  height: 500px;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 2rem 1rem;
  border-radius: ${({ theme }) => theme.$borderRadius};
  box-shadow: 2px 5px 10px 8px rgba(0, 0, 0, 0.3);
`;

const LogoContainer = styled.div`
  width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;
`;

const Logo = styled.img`
  width: 200px;
  border-radius: 50%;
  margin: 0 0 2.5rem 0;
  border: 0.5rem solid ${({ theme }) => theme.$colorRed};
  box-shadow: 3px 5px 8px 3px rgba(0, 0, 0, 0.2);
  animation: bigger infinite 1.75s linear;

  @keyframes bigger {
    50% {
      transform: scale(1.02);
    }
  }
`;

const Info = styled.div``;

const WebName = styled.div`
  color: ${({ theme }) => theme.$colorRed};
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: bold;
`;

const Slogan = styled.div`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.$colorGreen};
  font-weight: bold;
`;

const LoginPage = () => {
  const [isShowSignInPanel, setIsShowSignInPanel] = useState(true);
  const handleToggleSignInUp = () => {
    setIsShowSignInPanel(!isShowSignInPanel);
    console.log(isShowSignInPanel);
  };

  return (
    <LoginPageContainer>
      <LoginPageWrapper>
        <LogoContainer>
          <Logo src={LogoImg} alt="logo" />
          <Info>
            <WebName>Find Activity 找活動</WebName>
            <Slogan>最新、最好玩的活動，都在 FA 找活動</Slogan>
          </Info>
        </LogoContainer>
        {isShowSignInPanel ? (
          <SignInPanel handleToggleSignInUp={handleToggleSignInUp} />
        ) : (
          <SignUpPanel handleToggleSignInUp={handleToggleSignInUp} />
        )}
      </LoginPageWrapper>
    </LoginPageContainer>
  );
};

export default LoginPage;