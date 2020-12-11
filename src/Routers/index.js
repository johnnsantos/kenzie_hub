import { Route, Switch, useLocation, useParams } from "react-router-dom";
import Login from "../pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleUsersThunk } from "../store/modules/infoDevs/thunks";
import { requestUser } from "../requests";
import { handleUserThunk } from "../store/modules/infoUser/thunks";

import Home from "../pages/home";
import Register from "../pages/register";
import Header from "../components/header";
import HeaderAuthenticated from "../components/headerAuthenticated";
import UsersAuthenticated from "../pages/UsersAuthenticated";
import ProfilePage from "../pages/profilePage";
import About from "../pages/about";


const Routers = () => {
  const { devs } = useSelector((state) => state.Users);
  const dispatch = useDispatch();
  const location = useLocation();
  let token = window.localStorage.getItem("authorizationToken");

  const [nextURL, setNextURL] = useState("");

  useEffect(() => {
    dispatch(handleUsersThunk(nextURL, setNextURL));
  }, [nextURL]);

  useEffect(() => {
    token = window.localStorage.getItem("authorizationToken");
  }, [location]);

  useEffect(
    () => async () => {
      let id = window.localStorage.getItem("ID");
      const user = await requestUser(id);
      dispatch(handleUserThunk(user));
    },
    [nextURL]
  );

  return (
    <>
      {token ? (
        <>
          <HeaderAuthenticated />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/devs">
              <UsersAuthenticated />
            </Route>
            <Route exact path={`/devs/teste`}>
              <ProfilePage />
              </Route>
            <Route exact path="/sobre">
              <About />
             </Route>
          </Switch>
        </>
      ) : (
        <>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/sobre">
              <About />
            </Route>
          </Switch>
        </>
      )}
    </>
  );
};
export default Routers;
