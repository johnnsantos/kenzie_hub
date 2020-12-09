import { Route, Switch, useHistory } from "react-router-dom";
import DisplayDev from "../components/DisplayDev";
import DevCard from "../components/DevCard";

const Routers = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Bora Codar</h1>
          <DisplayDev>
            <DevCard />
            <DevCard />
            <DevCard />
          </DisplayDev>
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
