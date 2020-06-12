import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from 'Pages/Login'

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
