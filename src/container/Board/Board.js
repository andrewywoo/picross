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

  function getTopIndicator() {
    let result = [];
    for (let i = 0; i < puzzle.length; i++) {
      let column = [];
      let count = 0;
      puzzle.forEach(r => {
        if (r[i]) {
          count++;
        } else if (count !== 0 && r[i] === false) {
          column.push(count);
          count = 0;
        }
      });
      //only push count if it isn't 0. this accounts for the last row of the column being true;
      if (count) {
        column.push(count);
      }
      //after counting indicator numbers. push to result and result column.
      result.push(column);
      column = [];
    }
    //should iterate through columns of 2d-array and return an array of arrays for top indicator
    return result;
  }

  function getSideIndicator(index) {
    let count = 0;
    let result = [];
    puzzle[index].forEach(r => {
      if (r) {
        count++;
      } else if (count !== 0 && r === false) {
        result.push(count);
        count = 0;
      }
    });
    if (count) {
      result.push(count);
    }
    return result;
  }

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
        {getTopIndicator().map((numbers, index) => {
          return (
            <div key={index} className="row_indicator_group">
              <Indicator alignment="vertical" numbers={numbers}></Indicator>
            </div>
          );
        })}
      </div>
      {grid.map((row, rowIndex) => {
        return (
          <div key={rowIndex} className="row">
            <Indicator
              alignment="horizontal"
              numbers={getSideIndicator(rowIndex)}
            ></Indicator>
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
