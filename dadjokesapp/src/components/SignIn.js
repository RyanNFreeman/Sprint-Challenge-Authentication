import React from "react";
import axios from "axios";

class SignIn extends React.Component {
  state = {
    username: "my name is dad, not user",
    password: "pass"
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="username">
            <input
              value={this.state.username}
              onChange={this.handleChange}
              id="username"
              name="username"
              type="text"
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            <input
              value={this.state.password}
              onChange={this.handleChange}
              id="password"
              name="password"
              type="password"
            />
          </label>
        </div>
        <div>
          <button type="Submit">Sign In</button>
        </div>
        <p />
        {this.state.username}
        <p />
        {this.state.password}
      </form>
    );
  }

  handleSubmit = e => {
    e.preventDefault();
    const endpoint = "http://localhost:3300/api/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        console.log("Response", res);
      })
      .catch(err => {
        console.error("ERROR!!!!!", err);
      });
  };

  handleChange = e => {
    const { id, value } = e.target;
    this.setState({ [id]: value });
  };
}

export default SignIn;
