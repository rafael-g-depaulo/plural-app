import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from 'Pages/Login'
import AreYou from "./Pages/AreYouLGBTQIA";

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/"> 
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/areyouLGBTQIA" component={AreYou} />
      </Switch>
    </Router>
  )
}

export default Routes
