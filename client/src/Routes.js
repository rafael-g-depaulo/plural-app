import React, { lazy, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import AsyncComponent from "Components/AsyncComponent";
import UserContext from "Context/User";

const PasswordReset = lazy(() => import("Pages/PasswordReset"))
const Confirmation = lazy(() => import("Pages/Confirmation"))
const SignUp = lazy(() => import("Pages/SignUp"))
const Login = lazy(() => import("Pages/Login"))
const MyProfile = lazy(() => import("Pages/MyProfile"))
const EditProfile = lazy(() => import("Pages/EditProfile"))
const Profile = lazy(() => import("Pages/Profile"))
const AreYou = lazy(() => import("Pages/AreYouLGBTQIA"))
const MappingQuestion = lazy(() => import("Pages/MappingQuestion"))
const BlogList = lazy(() => import("Pages/BlogList"))
const Blog = lazy(() => import("Pages/Blog"))
const Event = lazy(() => import("Pages/Event"))
const SingUpMapping = lazy(() => import("Pages/Mapping"))
const Programming = lazy(() => import("Pages/Programming"))
const MappingSearch = lazy(() => import("Pages/MappingSearch"))

export const Routes = ({ ...props }) => {
  const { currentUser } = useContext(UserContext);

  const shouldSignupMapping = currentUser?.isMappingParticipant && (currentUser?.mapping === null || currentUser?.mapping === undefined)

  const redirectTo =
    currentUser?.active === false ?
      "/confirmation"
    : currentUser?.isLgbtq === null ?
      "/areyouLGBTQIA"
    : currentUser?.isLgbtq && currentUser?.isMappingParticipant === null && currentUser?.mapping === null ?
      "/participar-mapeamento"
    : currentUser?.isMappingParticipant && (currentUser?.mapping === null || currentUser?.mapping === undefined) ?
      "/mapping"
    : ""

  return (
    <Router basename="/">
      {/* if user logged in but didn't finish signup process, redirect them */}
      { redirectTo !== "" && <Redirect to={redirectTo} /> }

      {/* else, give 'em the routes */}
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

        {/* página de perfil -- current user */}
        <Route path={["/me", "/eu", "/meu-perfil"]}>
          { !currentUser || !currentUser.mapping ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <MyProfile />
            </AsyncComponent>
          )}
        </Route>

        {/* página de editar perfil */}
        <Route path="/edit-profile">
          { !currentUser || !currentUser.mapping ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <EditProfile />
            </AsyncComponent>
          )}
        </Route>

        {/* página de perfil  -- por id */}
        <Route path="/profile/:id_user">
          <AsyncComponent>
            <Profile />
          </AsyncComponent>
        </Route>

        {/* página da pergunta se um usuário é LGBTQ+ */}
        <Route path="/areyouLGBTQIA">
          { currentUser?.isLgbtq !== null ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <AreYou />
            </AsyncComponent>
          )}
        </Route>

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/participar-mapeamento">
          { !currentUser?.isLgbtq || currentUser?.isMappingParticipant !== null || currentUser?.mapping !== null ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <MappingQuestion />
            </AsyncComponent>
          )}
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

        {/* página de cadastro no mapeamento */}
        <Route path="/mapping">
          { !currentUser?.isMappingParticipant || (!!currentUser?.mapping)  ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <SingUpMapping />
            </AsyncComponent>
          )}
        </Route>

        {/* página de listagem da programação */}
        <Route path="/event">
          <AsyncComponent>
            <Programming />
          </AsyncComponent>
        </Route>

        {/* página de aviso da confirmação de email */}
        <Route path="/confirmation">
          { currentUser?.active ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <Confirmation />
            </AsyncComponent>
          )}
        </Route>

        {/* página de busca no mapeamento*/}
        <Route path="/search">
          { !currentUser || !currentUser?.mapping ? (
            <Redirect to="/" />
          ) : (
            <AsyncComponent>
              <MappingSearch />
            </AsyncComponent>
          )}
        </Route>
        
        {/* página de reset de senha */}
        <Route path="/password-reset/:token?">
          <AsyncComponent>
            <PasswordReset />
          </AsyncComponent>
        </Route>

        {/* Home page */}
        <Route exact path="/">
          {
            currentUser === null ? <Redirect to="/login" /> :
            shouldSignupMapping ? <Redirect to="/mapping" /> :
            <Redirect to="/event" />
          }
        </Route>
      </Switch>
    </Router> 
  );
};

export default Routes;
