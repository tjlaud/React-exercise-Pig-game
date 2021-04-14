import React, { useState } from "react";
import "./App.css";
import PlayerPanel from "./components/PlayerPanel";
import Dice from "./components/Dice";

function App() {
  const [dieNumber1, setDieNumber1] = useState(1);
  const [dieNumber2, setDieNumber2] = useState(1);

  // Die rolling function
  // Scores
  // Round score
  // Active player
  // Game playing?

  const rollFunction = () => {
    setDieNumber1(Math.floor(Math.random() * 6) + 1);
    setDieNumber2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div className="App">
      <div className="wrapper">
        <button className="btn-new">New game</button>
        <h1>Pig Game</h1>
        <PlayerPanel playerNumber="1" />
        <PlayerPanel playerNumber="2" />
        <Dice dieNumber={dieNumber1} />
        <Dice dieNumber={dieNumber2} />
        <br />
        <button className="btn-roll" onClick={rollFunction}>
          Roll dice
        </button>
        <button className="btn-hold">Hold</button>
      </div>
    </div>
  );
}

export default App;

// Bring the Pig Game into this and turn it into a React app

// Background = app
// Heading    = app
// Player panel = component
// Dice       = component
// New game button = app?
// Roll button =  app?
