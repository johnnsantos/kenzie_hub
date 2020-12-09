import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { handleUsersThunk } from "../store/modules/infoDevs/thunks";

const Routers = () => {
  const { devs } = useSelector((state) => state.reducer);
  const dispatch = useDispatch();

  const [nextURL, setNextURL] = useState("");

  useEffect(() => {
    dispatch(handleUsersThunk(nextURL, setNextURL));
  }, [devs]);
  return (
    <>
      <Switch>
        <Route exact path="/">
          <h1>Bora Codar</h1>
        </Route>
      </Switch>
    </>
  );
};
export default Routers;
