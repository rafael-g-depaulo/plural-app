import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Loading from './Pages/Loading/index';

import Home from "Pages/Home"
import SignUp from "Pages/SignUp"
import Login from 'Pages/Login'
import AreYou from "Pages/AreYouLGBTQIA"
import MappingQuestion from "Pages/MappingQuestion"

export const Routes = ({ ...props }) => {
  return (
    <Router basename="/"> 
      <Switch>

        {/* página de login */}
        <Route path="/login">
          <Login />
        </Route>

        {/* página de cadastro */}
        <Route  path="/signup">
          <SignUp />
        </Route>

        {/* página da pergunta se um usuário é LGBTQ+ */}
        <Route path="/areyouLGBTQIA" component={AreYou} />

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/participar-mapeamento" component={MappingQuestion} /> 

        {/* Home page */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
