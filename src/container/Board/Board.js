import React, { useState } from "react";
import Box from "../../component/Box/Box";
import "./Board.css";
import Indicator from "../../component/Indicator/Indicator";

const Board = props => {
  const [grid, setGrid] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]);

  const puzzle = [
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, true, true, true],
    [false, false, true, true, true],
    [true, true, true, true, false]
  ];

  //getTopIndicator
  function getTopIndicator() {
    //should iterate through columns of 2d-array and return an array of arrays for top indicator
    return [];
  }
  //getSideIndicator

  //sets new state when a box is clicked.
  function handleBoxChange(boxNumber) {
    let [row, column] = boxNumber;

    let newGrid = [...grid];
    let boxValue = newGrid[row][column];

    newGrid[row].splice(column, 1, !boxValue);

    setGrid(newGrid);
  }

  return (
    <div className="game-board">
      <div className="row_indicator">
        {[1, 2, 3, 4, 5].map(() => {
          return (
            <div className="row_indicator_group">
              <Indicator alignment="vertical" numbers={[1, 2, 3]}></Indicator>
            </div>
          );
        })}
      </div>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            <Indicator alignment="horizontal" numbers={[1, 2, 3]}></Indicator>
            {row.map((checkVal, boxIndex) => {
              return (
                <Box
                  key={"" + rowIndex + boxIndex}
                  checked={checkVal}
                  clicked={() => handleBoxChange([rowIndex, boxIndex])}
                ></Box>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
