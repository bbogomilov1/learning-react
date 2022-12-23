import { Component } from "react";

export default class Form extends Component {
  state = {
    input: "",
  };
  changeHandler = (event) => {
    console.log(this.state.input);
    this.setState({
      input: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <h3>Form</h3>
        <input
          onChange={this.changeHandler}
          type="text"
          js
          myvalue={this.state.input}
        ></input>
      </div>
    );
  }
}
