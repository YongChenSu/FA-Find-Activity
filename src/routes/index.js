import React, { Component } from 'react'
import { BrowserRouter as BrowserRouter, Switch, Route, Redirect } from "react-router-dom"
import Home from '../pages/Home'
import FindActivity from '../pages/FindActivity'
import Activity from '../pages/Activity'
import NewActivity from '../pages/NewActivity'

const Routes = () => {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/FindActivity' component={FindActivity} />
      <Route exact path='/Activity' component={Activity} />
      <Route path='/newActivity' component={NewActivity} />
    </Switch>
  )
}

export default Routes