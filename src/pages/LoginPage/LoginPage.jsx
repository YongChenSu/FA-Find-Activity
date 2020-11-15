import { useState, useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { login, getMe } from "../../WebAPI";
import { setAuthToken } from "../../utils/utils";
import { AuthContext } from "../../contexts";
import React from "react";

const ErrMessage = styled.div`
  color: red;
`;

const LoginPage = () => {
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
    <form onSubmit={handleSubmit}>
      <div>
        username:{" "}
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        password:{" "}
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>登入</button>
      {errMessage && <ErrMessage>{errMessage}</ErrMessage>}
    </form>
  );
};

export default LoginPage;
