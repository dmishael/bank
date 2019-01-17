import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";

class App extends Component {
  state ={
      accountBalance:4550000,
      user:{
        userName:"Stan",
        password:"banana"
      }
  }

  updateUser = (something)=>{
    let newUser = {...this.state.user}
    newUser = something
    this.setState({user:newUser})
  }
  render() {
    const ProfileComponent = ()=>{
      return(<Profile 
        accountBalance={this.state.accountBalance}
        userName={this.state.user.userName}
      />)
    }

    const LoginComponent = ()=>{
      return(<Login
        updateUser={this.updateUser}
      />)
    }
    return (
      <Router>
        <div>
          <img
            src="https://www.pngrepo.com/download/55407/bank-building-silhouette.png"
            alt="pic"
          />
          
          <Switch>
            <Route exact path='/profile' render={ProfileComponent}/>
            <Route exact path='/login' render={LoginComponent} />
            <Route exact path='/home' component={Home} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
