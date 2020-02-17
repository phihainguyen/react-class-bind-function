import React from "react";
import "./Output.css";
const output = props => {
  return (
    <div className="Output" style={props.borderStyle}>
      <h2>Ouptut: {props.input}</h2>
    </div>
  );
};
export default output;
