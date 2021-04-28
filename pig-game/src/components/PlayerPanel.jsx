import React from "react";
import "../App.css";

function PlayerPanel(props) {
  const handleClassName = (bool) => {
    return bool === true ? "playerBoxActive" : "playerBoxInactive";
  };

  return (
    <div className={handleClassName(props.activePlayerStyles)}>
      <h2>Player {props.playerNumber}</h2>
      <h2>Current: {props.currentScore}</h2>
      <div>
        <h2>{props.totalScore1}</h2>
        <h2>{props.totalScore2}</h2>
      </div>
    </div>
  );
}

export default PlayerPanel;
