import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    user: {
      userName: "",
      password: ""
    },
    redirect:false
  };
  handleChange = e => {
    let newUser = { ...this.state.user };
    const name = e.target.name;
    const value = e.target.value;
    newUser[name] = value;
    console.log(newUser);
    this.setState({ user: newUser });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.updateUser(this.state.user)
    this.setState({redirect:true})
  };
  render() {
      if(this.state.redirect){
          return <Redirect to='/profile'/>
      }
    return (
      <div>
        <p>New User:{this.state.userName}</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="userName" />
          <input type="text" name="userName" onChange={this.handleChange} />
          <label htmlFor="password" />
          <input type="password" name="password" onChange={this.handleChange} />
          <button type="submit">Log in</button>
        </form>
        <Link to="/home">Home</Link>
      </div>
    );
  }
}

export default Login;
