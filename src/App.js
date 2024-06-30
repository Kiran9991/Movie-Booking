import React, { Fragment } from 'react';
import { Switch, Route, } from "react-router-dom";
import Header from './components/Header';
import Login from './pages/Auth/Login';
import Admin from './pages/Admin';


function App() {
  return (
    <Fragment>
      <Header/>
      <Switch>
        <Route path='/admin'>
          <Admin/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
