import React, { Component } from 'react';

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            time: new Date().toLocaleTimeString(),
        }
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.updateClock();
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    updateClock() {
        this.setState({
            time: new Date().toLocaleTimeString(),
        });
    }

    render() {
        return(
            <div className={"white-text"}>
                <h2>The Time Is:</h2>
                <h4>{this.state.time}</h4>
            </div>
        );
    }
}

export default Clock;