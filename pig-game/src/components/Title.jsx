import React from "react";
import "../App.css";

function Title(props) {
  const handleClassName = (bool) => {
    return bool === true ? "h1" : "h2";
  };

  return (
    <div>
      <h1 className={handleClassName(props.titleOrWinClass)}>pigGame</h1>
      <h2 className={handleClassName(props.subTitleActiveClass)}>
        {() => {
          return props.subTitleActiveClass === true
            ? "Press New Game to start. First to 30 wins!"
            : " False ";
        }}
      </h2>
    </div>
  );
}

export default Title;
