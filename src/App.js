import React, { Component, useState } from "react";
import Routes from "./routes";
import { HashRouter as Router } from "react-router-dom";
import "./styles/main.sass";

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
};

export default App;
