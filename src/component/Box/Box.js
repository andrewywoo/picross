import React from "react";
import "./Box.css";

const Box = props => {
  const box = props.checked ? (
    <div
      className="box_checked"
      onClick={props.clicked}
      onContextMenu={() => console.log("right click!")}
    ></div>
  ) : (
    <div
      className="box_unchecked"
      onClick={props.clicked}
      onContextMenu={() => console.log("right click!")}
    ></div>
  );
  return box;
};

export default Box;
