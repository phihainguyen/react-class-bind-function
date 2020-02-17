import React, { Component } from "react";
import "./App.css";
import Animal from "./Animal/Animal";
import Input from "./Input/Input";
import Output from "./Output/Output";
class App extends Component {
  state = {
    animals: [{ name: "tiger" }, { name: "lion" }, { name: "penguin" }],
    inputValue: "random input"
  };
  onChangeHandler = event => {
    this.setState({
      animals: [
        { name: event.target.value },
        { name: "lion" },
        { name: "penguin" }
      ]
    });
  };
  outputHandler = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const styleInput = {
      border: " 1px solid #ff00ff",
      backgroundColor: "black",
      boxShadow: "1px 2px 3px #ee00ee",
      margin: "16px auto",
      width: "60%",
      padding: "16px",
      cursor: "pointer",
      textAlign: "center",
      color: "#00ff00"
    };
    const borderStyle = {
      border: "1px solid #ccc",
      boxShadow: "1px 2px 3px #bbb",
      width: "60%",
      margin: "16px auto",
      font: "inherit"
    };
    return (
      <div className="App">
        <Animal
          name={this.state.animals[0].name}
          change={this.onChangeHandler}
        ></Animal>
        <Animal name={this.state.animals[1].name}></Animal>
        <Animal name={this.state.animals[2].name}></Animal>
        <div style={borderStyle}>
          <Input
            input={this.state.inputValue}
            inputChange={this.outputHandler}
            instyle={styleInput}
            borderStyle={borderStyle}
          ></Input>
          <Output
            input={this.state.inputValue}
            inputChange={this.outputHandler}
            borderStyle={borderStyle}
          ></Output>
        </div>

        <button style={styleInput}>Hello</button>
      </div>
    );
  }
}

export default App;
