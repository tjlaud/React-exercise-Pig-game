import React from "react";
import "../App.css";
import die1 from "../images/dice-1.png";
import die2 from "../images/dice-2.png";
import die3 from "../images/dice-3.png";
import die4 from "../images/dice-4.png";
import die5 from "../images/dice-5.png";
import die6 from "../images/dice-6.png";

function Dice(props) {
  const dieObject = ["empty", die1, die2, die3, die4, die5, die6];

  const handleChange = (objectNumber) => {
    Number(objectNumber);
    return dieObject[objectNumber];
  };

  return (
    <img src={handleChange(props.dieNumber)} alt="Dice" className="dice" />
  );
}

export default Dice;

// console.log(dieString);
// console.log(typeof dieString);
