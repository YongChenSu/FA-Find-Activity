import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider } from "emotion-theming";
import theme from "./styles/base/variable";

ReactDOM.render(
  <ThemeProvider theme={theme.main}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
