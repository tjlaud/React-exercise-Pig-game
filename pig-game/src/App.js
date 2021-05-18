import React, { useState } from "react";
import "./App.css";
import PlayerPanel from "./components/PlayerPanel";
import Dice from "./components/Dice";
import RollandHold from "./components/RollandHold";
import Title from "./components/Title";

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
  const [titleOrWin, setTitleOrWin] = useState(true);
  const [subTitleActive, setSubTitleActive] = useState(true);

  // ************************** To do **************************
  // Title Component doesn't function yet. Sub title needs work.
  // Win state text and class changes still require work.

  // Die rolling function
  const rollFunction = () => {
    if (gamePlaying) {
      const diceOne = Math.floor(Math.random() * 6) + 1;
      const diceTwo = Math.floor(Math.random() * 6) + 1;
      setDieNumber1(diceOne);
      setDieNumber2(diceTwo);

      console.log(dieNumber1 + dieNumber2);

      // Update current score
      if (diceOne !== 1 || diceTwo !== 1) {
        setCurrentScore(currentScore + diceOne + diceTwo);
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
  };

  // Hold button function
  const holdFunction = () => {
    if (gamePlaying) {
      const runningTotalOne = currentScore + totalScore1;
      const runningTotalTwo = currentScore + totalScore2;
      activePlayerOne
        ? setTotalScore1(runningTotalOne)
        : setTotalScore2(runningTotalTwo);
      // checkWin();
      if (runningTotalOne > 30 || runningTotalTwo > 30) {
        // set game playing to false
        // create win state
        console.log("total score 1 = " + totalScore1);
        console.log("total score 2 = " + totalScore2);
        setTitleOrWin(false);
        setGamePlaying(false);
      } else {
        nextPlayer();
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
    setTitleOrWin(true);
    setSubTitleActive(false);
  };

  // Return the HTML
  return (
    <div className="App">
      <div className="gameBox">
        <button
          data-tilt-reset="false"
          className="btn-new"
          onClick={newGameFunction}
        >
          New game
        </button>
        <Title
          titleOrWinClass={titleOrWin}
          subTitleActiveClass={subTitleActive}
        />
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
          rollAndHoldClass={gamePlaying}
          rollFunction={rollFunction}
          holdFunction={holdFunction}
        />
      </div>
    </div>
  );
}

export default App;
