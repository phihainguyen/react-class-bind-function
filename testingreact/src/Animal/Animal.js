import React from "react";
import "./Animal.css";
const animal = props => {
  return (
    <div className="Animal">
      <h1>I am a {props.name}</h1>
      <input type="text" value={props.name} onChange={props.change}></input>
    </div>
  );
};
export default animal;
