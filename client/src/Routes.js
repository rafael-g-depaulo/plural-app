import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useLocation,
} from "react-router-dom";
import AsyncComponent from "Components/AsyncComponent";
import UserContext from "Context/User";
import MinWaitLazy from "Utils/MinWaitLazy";

const minWait = 500

const PasswordReset   = MinWaitLazy(0, () => import("Pages/PasswordReset"))
const Confirmation    = MinWaitLazy(0, () => import("Pages/Confirmation"))
const SignUp          = MinWaitLazy(0, () => import("Pages/SignUp"))
const Login           = MinWaitLazy(0, () => import("Pages/Login"))
const AreYou          = MinWaitLazy(0, () => import("Pages/AreYouLGBTQIA"))
const MappingQuestion = MinWaitLazy(0, () => import("Pages/MappingQuestion"))
const EditProfile     = MinWaitLazy(0, () => import("Pages/EditProfile"))
const MyProfile       = MinWaitLazy(minWait, () => import("Pages/MyProfile"))
const Profile         = MinWaitLazy(minWait, () => import("Pages/Profile"))
const BlogList        = MinWaitLazy(minWait, () => import("Pages/BlogList"))
const Blog            = MinWaitLazy(minWait, () => import("Pages/Blog"))
const Event           = MinWaitLazy(minWait, () => import("Pages/Event"))
const SingUpMapping   = MinWaitLazy(minWait, () => import("Pages/Mapping"))
const Programming     = MinWaitLazy(minWait, () => import("Pages/Programming"))
const MappingSearch   = MinWaitLazy(minWait, () => import("Pages/MappingSearch"))

const MyRedirect = ({
  children,
  noRedirect,
  ...props
}) => {
  const { currentUser } = useContext(UserContext);

  const redirectTo = currentUser?.provider && !currentUser?.name ?
      "/signup"
    : currentUser?.active === false ?
      "/confirmation"
    : currentUser?.isLgbtq === null ?
      "/areyouLGBTQIA"
    : currentUser?.isLgbtq && currentUser?.isMappingParticipant === null && currentUser?.mapping === null ?
      "/participar-mapeamento"
    : currentUser?.isMappingParticipant && (currentUser?.mapping === null || currentUser?.mapping === undefined) ?
      "/mapping"
    : ""

  const { pathname } = useLocation()

  return (
    noRedirect ? children :
    pathname === redirectTo ? children :
    redirectTo !== "" ? <Redirect to={redirectTo} /> :
    children
  )
}

export const Routes = ({ ...props }) => {
  const { currentUser } = useContext(UserContext);

  return (
    <Router basename="/">
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
            <MyRedirect>
              <AsyncComponent>
                <MyProfile />
              </AsyncComponent>
            </MyRedirect>
          )}
        </Route>

        {/* página de editar perfil */}
        <Route path="/edit-profile">
          { !currentUser || !currentUser.mapping ? (
            <Redirect to="/" />
          ) : (
            <MyRedirect>
              <AsyncComponent>
                <EditProfile />
              </AsyncComponent>
            </MyRedirect>
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
            <MyRedirect>
              <AsyncComponent>
                <AreYou />
              </AsyncComponent>
            </MyRedirect>
          )}
        </Route>

        {/* página que pergunta se um usuário quer participar do mapeamento */}
        <Route path="/participar-mapeamento">
          { !currentUser?.isLgbtq || currentUser?.isMappingParticipant !== null || currentUser?.mapping !== null ? (
            <Redirect to="/" />
          ) : (
            <MyRedirect>
              <AsyncComponent>
                <MappingQuestion />
              </AsyncComponent>
            </MyRedirect>
          )}
        </Route>

        {/* página de um blogpost */}
        <Route path="/blog/:id_post">
          <MyRedirect>
            <AsyncComponent>
              <Blog />
            </AsyncComponent>
          </MyRedirect>
        </Route>

        {/* página de listagem dos blogposts */}
        <Route path="/blog">
          <MyRedirect>
            <AsyncComponent>
              <BlogList />
            </AsyncComponent>
          </MyRedirect>
        </Route>

        {/* página de um evento individual */}
        <Route path="/event/:id_event">
          <MyRedirect>
            <AsyncComponent>
              <Event />
            </AsyncComponent>
          </MyRedirect>
        </Route>

        {/* página de listagem da programação */}
        <Route path="/event">
          <MyRedirect>
            <AsyncComponent>
              <Programming />
            </AsyncComponent>
          </MyRedirect>
        </Route>

        {/* página de cadastro no mapeamento */}
        <Route path="/mapping">
          { !currentUser?.isMappingParticipant || (!!currentUser?.mapping)  ? (
            <Redirect to="/" />
          ) : (
            <MyRedirect>
              <AsyncComponent>
                <SingUpMapping />
              </AsyncComponent>
            </MyRedirect>
          )}
        </Route>

        {/* página de aviso da confirmação de email */}
        <Route path="/confirmation">
          { currentUser?.active ? (
            <Redirect to="/" />
          ) : (
            <MyRedirect>
              <AsyncComponent>
                <Confirmation />
              </AsyncComponent>
            </MyRedirect>
          )}
        </Route>

        {/* página de busca no mapeamento*/}
        <Route path="/search">
          { !currentUser ? (
            <Redirect to="/" />
          ) : (
            <MyRedirect>
              <AsyncComponent>
                <MappingSearch />
              </AsyncComponent>
            </MyRedirect>
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
            <MyRedirect>
              <Redirect to="/event" />
            </MyRedirect>
          }
        </Route>

        {/* catch all route */}
        <Route><Redirect to="/" /></Route>
      </Switch>
    </Router> 
  );
};

export default Routes;
