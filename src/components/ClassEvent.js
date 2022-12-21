import { Component } from "react";

class ClassEvent extends Component {
  clickHandler() {
    console.log("i am clicked");
  }
  render() {
    return (
      <div>
        <p>handling an event in class</p>
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassEvent;
