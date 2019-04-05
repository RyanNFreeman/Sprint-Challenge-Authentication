import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";
import SignIn from "./components/SignIn";
import DadJokes from "./components/DadJokes";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/">Home</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/sign-in">Sign In</NavLink>
        &nbsp; | &nbsp;
        <NavLink to="/dad-jokes">See the secret Jokes</NavLink>
        <h1>Hello!</h1>
        <Route exact path="/" component={Home} />
        <Route exact path="/dad-jokes" component={DadJokes} />
        <Route exact path="/sign-in" component={SignIn} />
      </div>
    );
  }
}

export default App;
