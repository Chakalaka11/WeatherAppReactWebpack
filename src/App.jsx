//system imports
import React, { Component } from "react";
import "./App.css";
//import child components
import { Location, Time } from "./child-components/childBarrel";

class App extends Component {
  constructor(props) {
    super(props);
    this.currDate = new Date();
    this.timeStr = this.currDate.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
    this.locationObj = { a: "", b: 0 };
  }

  render() {
    return (
      <div className="App">
        <Location location={this.locationObj} />
        <Time time={this.timeStr} />
      </div>
    );
  }
}

export default App;
