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

import React from "react";
import styled from "styled-components";
import Button from "../../components/common/Button";

const Form = styled.form`
  width: 200px;
  height: 300px;
  background-color: #f8f8f8;
  border-radius: ${({ theme }) => theme.$borderRadius};
  border: 1px solid black;
`;

const Input = styled.div`
  width: 100%;
  height: 20px;
`;

const LoginPageContainer = styled.div`
  display: flex;
`;
const LogoContainer = styled.div`
  width: 100%;
`;
const WebName = styled.div`
  color: ${({ theme }) => theme.$borderRed};
`;
const Logo = styled.div``;
const FormContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <LogoContainer>
        <WebName>Find Activity</WebName>
        <Logo />
      </LogoContainer>
      <FormContainer>
        <Form>
          <Input></Input>
          <Button>送出</Button>
        </Form>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage;
