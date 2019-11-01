import React, { useState } from "react";
import "./App.css";

import Board from "./container/Board/Board";
import { games } from "./nonogram";
import Modal from "./component/UI/Modal/Modal";
import GameList from "./component/Menu/GameList/GameList";

function App() {
  const [puzzle, setPuzzle] = useState(games.easy[0].puzzle);
  const [showHide, setShowHide] = useState(false);

  function changePuzzle(e, difficulty) {
    const id = +e.target.value;

    //find puzzle by difficulty and id
    const selectedPuzzle = games[difficulty].filter(p => {
      return p.id === id;
    })[0].puzzle;

    setPuzzle(selectedPuzzle);
    setShowHide(!showHide);
  }

  return (
    <div className="App">
      <div onClick={() => setShowHide(!showHide)}>
        <h1>W O O C R O S S</h1>
      </div>
      <Modal closeModal={() => setShowHide(!showHide)} show={showHide}>
        <GameList changePuzzle={changePuzzle} />
      </Modal>
      <Board puzzle={puzzle} />
    </div>
  );
}

export default App;
