import React, { Component } from 'react';
import './time-component.css';

class Time extends Component {
  constructor(props) {
    super(props);
    this.state =
    {
      time: this.props.time
    };
  }
  render() {
    return (
      <div className="time-text">
        {this.state.time}
      </div>
    );
  }
}
export { Time };
