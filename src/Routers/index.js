import { Route, Switch, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleUsersThunk } from "../store/modules/infoDevs/thunks";

import Home from "../pages/home";
import Register from "../pages/register";
import Header from "../components/header";
import HeaderAuthenticated from "../components/headerAuthenticated";

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
              <h1>devs page</h1>
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
