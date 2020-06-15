import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "Pages/Home";

import Mapping from "Components/JobsInput/";

export const Routes = ({ ...props }) => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/">
          <Mapping />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
