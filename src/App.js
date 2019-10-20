import React, { useState } from "react";
import "./App.css";
import Board from "./container/Board/Board";

function App() {
  const [puzzle, setPuzzle] = useState([
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, true, true, true],
    [false, false, true, true, true],
    [true, true, true, true, false]
  ]);

  const puzzles = {
    "1": [
      [true, false, false, false, false],
      [true, true, true, true, false],
      [false, false, true, true, true],
      [false, false, true, true, true],
      [true, true, true, true, false]
    ],
    "2": [
      [false, false, true, true, true],
      [false, false, false, true, true],
      [false, false, true, true, true],
      [true, true, false, true, false],
      [true, true, false, false, false]
    ]
  };

  function changePuzzle(e) {
    const puzzleNumber = e.target.value;
    setPuzzle(puzzles[puzzleNumber]);
  }

  return (
    <div className="App">
      <h1>P I C R O S S</h1>
      <button value="1" onClick={e => changePuzzle(e)}>
        1
      </button>
      <button value="2" onClick={e => changePuzzle(e)}>
        2
      </button>
      <Board puzzle={puzzle} />
    </div>
  );
}

export default App;
