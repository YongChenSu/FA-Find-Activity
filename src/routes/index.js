import React, { Suspense, lazy } from "react";
import { HashRouter as Switch, Route } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const FindActivity = lazy(() => import("../pages/FindActivity"));
const Activity = lazy(() => import("../pages/Activity"));
const Login = lazy(() => import("../pages/Login"));

const Routes = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/find-activity" component={FindActivity} />
        <Route path="/activity/:id" component={Activity} />
        <Route path="/login-page" component={Login} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
