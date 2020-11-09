import React, { Component } from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../pages/Home";
import FindActivity from "../pages/FindActivity";
import Activity from "../pages/Activity";
import NewActivity from "../pages/NewActivity";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/find-activity" component={FindActivity} />
      <Route exact path="/activity" component={Activity} />
      <Route path="/new-activity" component={NewActivity} />
    </Switch>
  );
};

export default Routes;
