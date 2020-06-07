import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AreYou from "./Pages/AreYouLGBTQIA";

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
        <Route path="/areyouLGBTQIA" component={AreYou} />
      </Switch>
    </Router>
  )
}

export default Routes
