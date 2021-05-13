import React, { useEffect, useRef } from "react";
import "../App.css";
import VanillaTilt from "vanilla-tilt";
import die1 from "../images/dice-1.png";
import die2 from "../images/dice-2.png";
import die3 from "../images/dice-3.png";
import die4 from "../images/dice-4.png";
import die5 from "../images/dice-5.png";
import die6 from "../images/dice-6.png";

function Dice(props) {
  // **** Tilt Effect ****
  const tiltRef = useRef();
  const tiltOptions = {
    max: 20,
    scale: 1.05,
    reset: true,
  };
  useEffect(() => {
    VanillaTilt.init(tiltRef.current, tiltOptions);
  }, [tiltOptions]);

  // **** Array of Die images ****
  const dieObject = ["empty", die1, die2, die3, die4, die5, die6];

  const handleChange = (objectNumber) => {
    Number(objectNumber);
    return dieObject[objectNumber];
  };

  return (
    <div ref={tiltRef}>
      <img src={handleChange(props.dieNumber)} alt="Dice" className="dice" />
    </div>
  );
}

export default Dice;
