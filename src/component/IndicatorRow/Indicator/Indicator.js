import React from "react";
import "./Indicator.css";

const Indicator = props => {
  return props.numbers.map((n, i) => {
    return (
      <div key={i} className={props.alignment}>
        {n}
      </div>
    );
  });
};

export default Indicator;
