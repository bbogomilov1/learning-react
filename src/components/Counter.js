import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
  }
  render() {
    return (
      <div>
        <h3>Current counter is: {this.state.counter}</h3>
        <button>Click me</button>
      </div>
    );
  }
}

export default Counter;
