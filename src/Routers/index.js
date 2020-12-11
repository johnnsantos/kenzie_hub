import { Route, Switch, useLocation } from "react-router-dom";
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

const Routers = () => {
  const { devs } = useSelector((state) => state.Users);
  console.log(devs);
  const dispatch = useDispatch();
  const location = useLocation();
  let token = window.localStorage.getItem("authorizationToken");

  const [nextURL, setNextURL] = useState("");

  useEffect(() => {
    dispatch(handleUsersThunk(nextURL, setNextURL));
  }, [devs]);

  useEffect(() => {
    token = window.localStorage.getItem("authorizationToken");
  }, [location]);

  useEffect(() => {
    let id = window.localStorage.getItem("ID");
    const user = requestUser(id);
    dispatch(handleUserThunk(user));
  }, []);

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
          </Switch>
        </>
      )}
    </>
  );
};
export default Routers;
