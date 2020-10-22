import React, { Component, useState } from 'react'
import Routes from './routes'
import { BrowserRouter as Router } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/main.sass'

const App = () => {
  return (
    <Router>
      <Routes />
    </Router>
  )
}

export default App