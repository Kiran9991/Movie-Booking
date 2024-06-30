import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Dashboard from "./pages/Dashboard";
import Sidebar from "./components/Sidebar";
import './App.css';
import AddCategory from "./pages/Category/AddCategory";


function App() {
  return (
    <Fragment>
      <Sidebar/>
      <Switch>
        <Route path="/admin-login">
          <Login />
        </Route>
        <Route path="/add-category">
          <AddCategory/>
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </Fragment>
  );
}

export default App;
