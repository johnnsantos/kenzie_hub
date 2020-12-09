import { Route, Switch, useHistory } from "react-router-dom";
import Header from "../components/header/index.jsx";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <h1>Bora Codar</h1> */}
          <Header />
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
