import React, { useState } from "react";
import Box from "../../component/Box/Box";
import "./Board.css";

const Board = props => {
  const [grid, setGrid] = useState([
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false],
    [false, false, false, false]
  ]);

  function handleBoxChange(boxNumber) {
    console.log(boxNumber);

    let newGrid = [...grid];
    let boxValue = newGrid[boxNumber[0]][boxNumber[1]];
    newGrid[boxNumber[0]].splice(boxNumber[1], 1, !boxValue);

    setGrid(newGrid);
  }

  return (
    <div>
      Game Board
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
  );
};

export default Board;
