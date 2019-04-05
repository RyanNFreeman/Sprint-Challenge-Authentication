import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import "./App.css";

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

const Home = () => {
  return <h2>This is the Home Page.</h2>;
};

const DadJokes = () => {
  return <h2>These are Dad Jokes</h2>;
};

const SignIn = () => {
  return <h2>Please sign in:</h2>;
};

export default App;
