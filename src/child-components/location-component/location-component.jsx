import React, { Component } from 'react';
import './location-component.css';

class Location extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div className="location-text">
            </div>
        );
    }
}
export {Location};
