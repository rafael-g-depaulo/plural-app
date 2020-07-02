import React, { lazy, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import AsyncComponent from "Components/AsyncComponent";
import UserContext from "Context/User";

const Confirmation = lazy(() => import('Pages/Confirmation'))
const SignUp = lazy(() => import("Pages/SignUp"))
const Login = lazy(() => import("Pages/Login"))
const AreYou = lazy(() => import("Pages/AreYouLGBTQIA"))
const MappingQuestion = lazy(() => import("Pages/MappingQuestion"))
const BlogList = lazy(() => import("Pages/BlogList"))
const Blog = lazy(() => import("Pages/Blog"))
const Event = lazy(() => import("Pages/Event"))
const SingUpMapping = lazy(() => import("Pages/Mapping"))
const Programming = lazy(() => import("Pages/Programming"))
const MappingSearch = lazy(() => import("Pages/MappingSearch"))

export const Routes = ({ ...props }) => {
  const user = useContext(UserContext)
  
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
          <AsyncComponent>
            <Confirmation />
          </AsyncComponent>
        </Route>

        {/* página de busca no mapeamento*/}
        <Route path="/search">
          <AsyncComponent>
            <MappingSearch />
          </AsyncComponent>
        </Route>

        {/* Home page */}
        <Route exact path="/">
          { user === null
            ? <Redirect to="/login"/>
            : <Redirect to="/event"/>
          }
        </Route>
        
      </Switch>
    </Router> 
  );
};

export default Routes;
