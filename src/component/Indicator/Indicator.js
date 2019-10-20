import React from "react";
import "./Indicator.css";

const Indicator = props => {
  return props.numbers.map(n => {
    return <div className={props.alignment}>{n}</div>;
  });
};

export default Indicator;
