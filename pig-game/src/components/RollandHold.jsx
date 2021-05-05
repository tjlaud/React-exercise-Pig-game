import React from "react";
import "../App.css";

function RollandHold(props) {
  const handleClassName = (bool) => {
    return bool === true ? "rollAndHoldActive" : "rollAndHoldDisabled";
  };

  return (
    <div>
      <button
        className={handleClassName(props.rollAndHoldClass)}
        onClick={props.rollFunction}
      >
        Roll dice
      </button>
      <button
        className={handleClassName(props.rollAndHoldClass)}
        onClick={props.holdFunction}
      >
        Hold
      </button>
    </div>
  );
}

export default RollandHold;
