import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';


function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.state = {
            temperature: '',
            scale: 'c',
        };
    }

    handleFahrenheitChange(temperature) {
        this.setState({
            scale: 'f',
            temperature,
        });
    }

    handleCelsiusChange(temperature) {
        this.setState({
            scale: 'c',
            temperature,
        });
    }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <CalculatorWrapper>
                <TemperatureInput
                    scale={"c"}
                    temperature={celsius}
                    onTemperatureChange={this.handleCelsiusChange}
                />
                <TemperatureInput
                    scale={"f"}
                    temperature={fahrenheit}
                    onTemperatureChange={this.handleFahrenheitChange}
                />
                <BoilingVerdict
                    celsius={parseFloat(celsius)}
                />
            </CalculatorWrapper>
        );
    }
}

const CalculatorWrapper = styled.div`
    color: white;
`;

export default Calculator;