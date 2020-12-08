import { Route, Switch, useHistory } from 'react-router-dom';

const Routers = () => {
  
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <h1>Bora Codar</h1>
        </Route>
      </Switch>
    </>
  );
};
export default Routers;

