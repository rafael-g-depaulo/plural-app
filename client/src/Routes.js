import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Confirmation from 'Pages/Confirmation'

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
        <Route path="/">
          <Confirmation />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
