import React, { useState } from "react";
import "./App.css";
import PlayerPanel from "./components/PlayerPanel";
import Dice from "./components/Dice";
import RollandHold from "./components/RollandHold";

function App() {
  // const [playerOneStyles, setPlayerOneStyles] = useState("playerOneBox");
  // const [playerTwoStyles, setPlayerTwoStyles] = useState("playerTwoBox");
  const [dieNumber1, setDieNumber1] = useState(2);
  const [dieNumber2, setDieNumber2] = useState(2);
  const [currentScore, setCurrentScore] = useState(0);
  const [totalScore1, setTotalScore1] = useState(0);
  const [totalScore2, setTotalScore2] = useState(0);
  const [activePlayerOne, setActivePlayerOne] = useState(true);
  const [gamePlaying, setGamePlaying] = useState(false);
  const [rollAndHoldActive, setRollAndHoldActive] = useState(false);

  // ************************** To do **************************
  // Current score still display the last roll NOT the current :(
  // React vs CSS

  // Scores
  // Round score
  // Active player
  // Game playing?
  // if game playing ? then allow the roll function and scores to work

  // Die rolling function
  const rollFunction = () => {
    if (gamePlaying) {
      setDieNumber1(Math.floor(Math.random() * 6) + 1);
      setDieNumber2(Math.floor(Math.random() * 6) + 1);
      console.log(dieNumber1 + dieNumber2);

      // Update current score
      if (dieNumber1 !== 1 && dieNumber2 !== 1) {
        setCurrentScore(currentScore + dieNumber1 + dieNumber2);
      } else {
        nextPlayer();
        setCurrentScore(0);
      }
    }
  };

  // Switch to next player function
  const nextPlayer = () => {
    setActivePlayerOne(!activePlayerOne);
    setCurrentScore(0);
    console.log(activePlayerOne);
  };

  // Hold button function
  const holdFunction = () => {
    if (gamePlaying) {
      activePlayerOne
        ? setTotalScore1(currentScore + totalScore1)
        : setTotalScore2(currentScore + totalScore2);
      nextPlayer();
      // Win function
      if (totalScore1 || totalScore2 > 30) {
        // set game playing to false
        // create win state
        console.log("winner");
      }
    }
  };

  // New game function
  const newGameFunction = () => {
    setCurrentScore(0);
    setActivePlayerOne(true);
    setTotalScore1(0);
    setTotalScore2(0);
    setGamePlaying(true);
    setRollAndHoldActive(true);
  };

  // Return the HTML
  return (
    <div className="App">
      <div className="gameBox">
        <button className="btn-new" onClick={newGameFunction}>
          New game
        </button>
        <h1>Pig Game</h1>
        <div className="rollingScoreBox">
          <PlayerPanel
            playerNumber="1"
            activePlayerStyles={activePlayerOne}
            currentScore={activePlayerOne ? currentScore : null}
            totalScore1={totalScore1}
          />
          <Dice dieNumber={dieNumber1} />
          <Dice dieNumber={dieNumber2} />
          <PlayerPanel
            playerNumber="2"
            activePlayerStyles={!activePlayerOne}
            currentScore={activePlayerOne ? null : currentScore}
            totalScore2={totalScore2}
          />
        </div>
        <RollandHold
          rollAndHoldClass={rollAndHoldActive}
          rollFunction={rollFunction}
          holdFunction={holdFunction}
        />
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
