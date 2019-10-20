import React, { useState, useEffect } from "react";
import Box from "../../component/Box/Box";
import "./Board.css";
import IndicatorRow from "../../component/IndicatorRow/IndicatorRow";

const Board = props => {
  const [grid, setGrid] = useState([
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false],
    [false, false, false, false, false]
  ]);

  const [indicators, setIndicators] = useState({ top: [], side: [] });

  useEffect(() => {
    //sets the indicators for the picross gameboard
    getIndicators();
  }, [props.puzzle]);

  function getIndicators() {
    let top = [];
    let side = [];

    //logic for top
    for (let i = 0; i < props.puzzle.length; i++) {
      let column = [];
      let topCount = 0;
      props.puzzle.forEach(r => {
        if (r[i]) {
          topCount++;
        } else if (topCount) {
          column.push(topCount);
          topCount = 0;
        }
      });
      //only push count if it isn't 0. this accounts for the last row of the column being true;
      if (topCount) {
        column.push(topCount);
      }
      //after counting indicator numbers. push to top and result topColumn.
      top.push(column);
      column = [];
    }

    let sideCount = 0;
    let row = [];
    for (let i = 0; i < props.puzzle.length; i++) {
      props.puzzle[i].forEach(r => {
        if (r) {
          sideCount++;
        } else if (sideCount) {
          row.push(sideCount);
          sideCount = 0;
        }
      });
      if (sideCount) {
        row.push(sideCount);
        sideCount = 0;
      }
      side.push(row);
      row = [];
    }

    setIndicators({ top: top, side: side });
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
      <div className="topInd">
        <IndicatorRow
          indicators={indicators.top}
          orientation="horizontal"
        ></IndicatorRow>
      </div>
      <div className="sideInd">
        <IndicatorRow
          indicators={indicators.side}
          orientation="vertical"
        ></IndicatorRow>
      </div>
      <div className="board">
        {grid.map((row, rowIndex) => {
          return (
            <div key={rowIndex} className="row">
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
    </div>
  );
};

export default Board;
