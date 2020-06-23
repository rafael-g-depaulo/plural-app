import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AsyncComponent from "Components/AsyncComponent";

const Home = lazy(() => import("Pages/Home"));
const SignUp = lazy(() => import("Pages/SignUp"));
const Login = lazy(() => import("Pages/Login"));
const AreYou = lazy(() => import("Pages/AreYouLGBTQIA"));
const MappingQuestion = lazy(() => import("Pages/MappingQuestion"));
const SingUpMapping = lazy(() => import("Pages/Mapping"));

export const Routes = ({ ...props }) => {
  return (
    <Router basename="/">
      <Switch>
        {/* página de login */}
        <Route path="/login">
          <AsyncComponent>
            <Login />
          </AsyncComponent>
        </Route>

        {/* página de cadastro */}
        <Route path="/signup">
          <AsyncComponent>
            <SignUp />
          </AsyncComponent>
        </Route>

        {/* página da pergunta se um usuário é LGBTQ+ */}
        <Route path="/areyouLGBTQIA">
          <AsyncComponent>
            <AreYou />
          </AsyncComponent>
        </Route>

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/participar-mapeamento">
          <AsyncComponent>
            <MappingQuestion />
          </AsyncComponent>
        </Route>

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/mapping">
          <AsyncComponent>
            <SingUpMapping />
          </AsyncComponent>
        </Route>

        {/* Home page */}
        <Route exact path="/">
          <AsyncComponent>
            <Home />
          </AsyncComponent>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
