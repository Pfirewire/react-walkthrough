import React, { Component } from 'react';

function GuestGreeting(props) {
    return <h1>Please Sign Up</h1>;
}

function UserGreeting(props) {
    return <h1>Welcome Back!</h1>;
}

class Greeting extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        if(this.props.isLoggedIn) {
            return (
                <UserGreeting />
            );
        } else {
            return (
                <GuestGreeting />
            );
        }
    }

}

export default Greeting;