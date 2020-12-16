import { Route, Switch, useLocation } from "react-router-dom";
import Login from "../pages/Login";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleUsersThunk } from "../store/modules/infoDevs/thunks";
import { requestUser } from "../requests";
import { handleUserThunk } from "../store/modules/infoUser/thunks";

import Home from "../pages/home";
import Register from "../pages/register";
import ProfileUserPage from "../pages/ProfileUserPage";

import Header from "../components/header";
import HeaderAuthenticated from "../components/headerAuthenticated";
import UsersAuthenticated from "../pages/UsersAuthenticated";
import ProfilePage from "../pages/profilePage";
import About from "../pages/about";
import TechCard from "../components/TechCard";
import InsertTech from "../components/InsertTech";
import InsertWork from "../components/InsertWork";
import Loading from "../components/Loading";
import Graph from "../components/Graph";

import { AnimatePresence } from "framer-motion";

const Routers = () => {
  const dispatch = useDispatch();
  const token = () => window.localStorage.getItem("authorizationToken");

  useEffect(() => {
    dispatch(handleUsersThunk());
    dispatch(handleUserThunk());
  }, []);

  const { display } = useSelector((state) => state.Display);
  const { displayWork } = useSelector((state) => state.DisplayWork);
  const { loading } = useSelector((state) => state.Loading);

  return (
    <>
      {token() ? (
        <AnimatePresence>
          <HeaderAuthenticated />
          <Switch>
            {display && <InsertTech />}
            {displayWork && <InsertWork />}
            {loading && <Loading />}
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/devs">
              <UsersAuthenticated />
            </Route>
            <Route exact path={`/devs/:id`}>
              <ProfilePage />
            </Route>
            <Route exact path="/sobre">
              <About />
            </Route>
            <Route exact path="/edit/:id">
              <ProfileUserPage />
            </Route>
            <Route exact path="/techs">
              <TechCard />
            </Route>
            <Route exact path="/graph">
              <Graph />
            </Route>
          </Switch>
        </AnimatePresence>
      ) : (
        <AnimatePresence>
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
        </AnimatePresence>
      )}
    </>
  );
};
export default Routers;
