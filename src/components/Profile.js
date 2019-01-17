import React, { Component } from 'react';
import {Link } from 'react-router-dom'
class Profile extends Component {
    render() {
        return (
            <div>
                <Link to='/home'>Home</Link>
                <h1>Welcome {this.props.userName}</h1>
                <p>Balance: {this.props.accountBalance}</p>
            </div>
        );
    }
}

export default Profile;