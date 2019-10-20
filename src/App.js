import React from "react";
import "./App.css";
import Board from "./container/Board/Board";

function App() {
  const puzzle = [
    [true, false, false, false, false],
    [true, true, true, true, false],
    [false, false, true, true, true],
    [false, false, true, true, true],
    [true, true, true, true, false]
  ];
  return (
    <div className="App">
      <h1>P I C R O S S</h1>
      <Board puzzle={puzzle} />
    </div>
  );
}

export default App;
