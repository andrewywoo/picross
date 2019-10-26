import React, { useState } from "react";
import "./App.css";

import Board from "./container/Board/Board";
import { games } from "./nonogram";

function App() {
  const [puzzle, setPuzzle] = useState(games.easy[0].puzzle);

  function changePuzzle(e, difficulty) {
    const id = +e.target.value;

    //find puzzle by difficulty and id
    const selectedPuzzle = games[difficulty].filter(p => {
      return p.id === id;
    })[0].puzzle;

    setPuzzle(selectedPuzzle);
  }

  return (
    <div className="App">
      <h1>P I C R O S S</h1>
      <button value="1" onClick={e => changePuzzle(e, "easy")}>
        1
      </button>
      <button value="2" onClick={e => changePuzzle(e, "easy")}>
        2
      </button>
      <Board puzzle={puzzle} />
    </div>
  );
}

export default App;
