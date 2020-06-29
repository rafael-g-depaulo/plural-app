import React, { lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AsyncComponent from "Components/AsyncComponent";

const Confirmation = lazy(() => import('Pages/Confirmation'))
const Home = lazy(() => import("Pages/Home"))
const SignUp = lazy(() => import("Pages/SignUp"))
const Login = lazy(() => import("Pages/Login"))
const AreYou = lazy(() => import("Pages/AreYouLGBTQIA"))
const MappingQuestion = lazy(() => import("Pages/MappingQuestion"))
const BlogList = lazy(() => import("Pages/BlogList"))
const Blog = lazy(() => import("Pages/Blog"))
const Event = lazy(() => import("Pages/Event"))
const SingUpMapping = lazy(() => import("Pages/Mapping"))
const Programming = lazy(() => import("Pages/Programming"))

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
        
        {/* página de um blogpost */}
        <Route path="/blog/:id_post">        
          <AsyncComponent>
            <Blog />
          </AsyncComponent> 
        </Route>

        {/* página de listagem dos blogposts */}
        <Route path="/blog">        
          <AsyncComponent>
            <BlogList />
          </AsyncComponent>
        </Route>

        {/* página de um evento individual */}
        <Route path="/event/:id_event">        
          <AsyncComponent>
            <Event />
          </AsyncComponent>
        </Route>

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/mapping">
          <AsyncComponent>
            <SingUpMapping />
          </AsyncComponent>
        </Route>

        {/* página de listagem da programação */}
        <Route path="/event">
          <AsyncComponent>
            <Programming />
          </AsyncComponent>
        </Route>

        {/* página de aviso da confirmação de email */}
        <Route path="/confirmation">
          <Confirmation />
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
