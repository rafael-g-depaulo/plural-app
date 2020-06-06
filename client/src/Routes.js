import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./Pages/Home"
import MappingQuestion from "./Pages/MappingQuestion"

export const Routes = ({
  ...props
}) => {

  return (
    <Router basename="/">
      <Switch>
        <Route exact path="/mapping" component={MappingQuestion} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  )
}

export default Routes
