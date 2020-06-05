import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
      </Switch>
    </Router>
  )
}

export default Routes
