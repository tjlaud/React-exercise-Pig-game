import React from "react";
import "../App.css";

function PlayerPanel(props) {
  const handleClassName = (bool) => {
    return bool === true ? "playerBoxActive" : "playerBoxInactive";
  };

  return (
    <div className={handleClassName(props.activePlayerStyles)}>
      <h2>Player {props.playerNumber}</h2>
      <h3>Current: {props.currentScore}</h3>
      <div className={"totalScore"}>
        <h3>Total Score:&nbsp; </h3>
        <h3>{props.totalScore1}</h3>
        <h3>{props.totalScore2}</h3>
      </div>
    </div>
  );
}

export default PlayerPanel;
