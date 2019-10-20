import React from "react";
import "./IndicatorRow.css";
import Indicator from "./Indicator/Indicator";

const IndicatorRow = props => {
  return (
    <div className={`row_indicator_${props.orientation}`}>
      {props.indicators.map((numbers, index) => {
        return (
          <div
            key={index}
            className={`row_indicator_group_${props.orientation}`}
          >
            <Indicator
              alignment={
                props.orientation === "horizontal" ? "vertical" : "horizontal"
              }
              numbers={numbers}
            ></Indicator>
          </div>
        );
      })}
    </div>
  );
};

export default IndicatorRow;
