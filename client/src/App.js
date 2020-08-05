import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import AddNewFriend from "./components/AddNewFriend";
function App() {
  return (
    <div className="App">
      <Switch>
        <PrivateRoute exact path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={SignUp} />
        <PrivateRoute path="/add-friend" component={AddNewFriend} />

        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
