import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Mapping from "./Pages/Mapping";

export const Routes = ({ ...props }) => {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/mapping" component={Mapping}></Route>
      </Switch>
    </Router>
  );
};

export default Routes;
