import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './Pages/Loading/index';

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
        <Route path="/">
          <Loading />
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes
