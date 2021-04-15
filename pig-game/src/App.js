import React, { useState } from "react";
import "./App.css";
import PlayerPanel from "./components/PlayerPanel";
import Dice from "./components/Dice";

function App() {
  const [dieNumber1, setDieNumber1] = useState(2);
  const [dieNumber2, setDieNumber2] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [activePlayerOne, setActivePlayerOne] = useState(true);

  // For next lesson:
  // Active player is working.
  // Current score still display the last roll NOT the current :(
  // The current score needs reseting to 0 on a change of player.
  // Hold button implementation.

  // Scores
  // Round score
  // Active player
  // Game playing?
  // if game playing ? then allow the roll function and scores to work
  // const newGame = () => {
  //   setCurrentScore(0);
  //   gamePlaying = !gamePlaying;
  // };

  // Die rolling function
  const rollFunction = () => {
    setDieNumber1(Math.floor(Math.random() * 6) + 1);
    setDieNumber2(Math.floor(Math.random() * 6) + 1);
    console.log(dieNumber2);

    if (dieNumber1 !== 1 && dieNumber2 !== 1) {
      setCurrentScore(currentScore + dieNumber1 + dieNumber2);
    } else {
      nextPlayer();
      // next player function
      // console.log("next player");
    }
  };

  const nextPlayer = () => {
    setActivePlayerOne(!activePlayerOne);
    console.log(activePlayerOne);
  };
  // Current Score

  return (
    <div className="App">
      <div className="wrapper">
        <button className="btn-new">New game</button>
        <h1>Pig Game</h1>
        <PlayerPanel
          playerNumber="1"
          currentScore={activePlayerOne ? currentScore : null}
        />
        <PlayerPanel
          playerNumber="2"
          currentScore={activePlayerOne ? null : currentScore}
        />
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
