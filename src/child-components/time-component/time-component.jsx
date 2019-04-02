import React, { Component } from 'react';
import './time-component.css';

class Time extends Component {
    render() {
        return (
            <div className="time-text">
                {this.props.time}
            </div>
        );
    }
}
export { Time };
