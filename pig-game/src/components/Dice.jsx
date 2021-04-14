import React from "react";
import "../App.css";
import die1 from "../images/dice-1.png";
import die2 from "../images/dice-2.png";
import die3 from "../images/dice-3.png";
import die4 from "../images/dice-4.png";
import die5 from "../images/dice-5.png";
import die6 from "../images/dice-6.png";

function Dice(props) {
  return <img src={die1} alt="Dice" class="dice" />;
}

export default Dice;