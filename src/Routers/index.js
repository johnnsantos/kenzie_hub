import { Route, Switch, useHistory } from "react-router-dom";
import Login from "../pages/Login";
const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Bora Codar</h1>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
