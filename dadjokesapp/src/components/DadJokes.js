import React from "react";
import axios from "axios";

class DadJokes extends React.Component {
  state = {
    jokes: []
  };
  render() {
    return (
      <div>
        <h2>These are Dad Jokes</h2>
        <ul>
          {this.state.jokes.map(joke => (
            <li key={joke.id}>{joke.joke}</li>
          ))}
        </ul>
      </div>
    );
  } //needs logic. If token show dad jokes. if !token you must log in redirect
  componentDidMount() {
    const endpoint = "http://localhost:3300/api/jokes";
    const token = localStorage.getItem("token");
    const requestOptions = {
      headers: {
        authorization: token
      }
    };
    axios
      .get(endpoint, requestOptions)
      .then(res => {
        this.setState({ jokes: res.data });
      })
      .catch(err => {
        console.error("Big error", err);
      });
  }
}

export default DadJokes;
