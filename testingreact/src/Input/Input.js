import React from "react";
import "./Input.css";
const input = props => {
  return (
    <div className="Input">
      <h2>Please type something to the input</h2>
      <input
        type="text"
        value={props.input}
        onChange={props.inputChange}
        className="input"
        style={props.instyle}
      ></input>
    </div>
  );
};
export default input;
