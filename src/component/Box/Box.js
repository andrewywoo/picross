import React from "react";
import "./Box.css";

const Box = props => {
  const box = props.checked ? (
    <div className="box_checked" onClick={props.clicked}></div>
  ) : (
    <div className="box_unchecked" onClick={props.clicked}></div>
  );
  return box;
};

export default Box;
