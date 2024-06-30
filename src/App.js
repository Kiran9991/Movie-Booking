import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import './App.css';
import Category from "./pages/Category/Category";
import Movie from "./pages/Movie/Movie";


function App() {
  return (
    <Fragment>
      <Sidebar/>
      <Switch>
        <Route path="/admin-login">
          <Login />
        </Route>
        <Route path="/category">
          <Category/>
        </Route>
        <Route path='/movie'>
          <Movie/>
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
