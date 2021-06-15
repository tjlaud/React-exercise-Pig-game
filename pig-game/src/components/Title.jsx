import React from "react";
import "../App.css";

function Title(props) {
  const handleClassName = (bool) => {
    return bool === true ? "title" : "titleWin";
  };
  const handleTextChange = (bool, text) => {
    return bool === true ? "pigGame" : text;
  };
  const handleSubTitleClassName = (bool) => {
    return bool === true ? "subTitle" : "subTitleHidden";
  };
  // const handleSubTitleChange = (bool) => {
  //   return bool === true
  //     ? "Press New Game to start. First to 30 wins!"
  //     : " False ";
  // };

  return (
    <div className="titles">
      <h1 className={handleClassName(props.titleOrWinClass)}>
        {handleTextChange(props.titleOrWinClass, props.setWinnerTitleText)}
      </h1>
      <h2 className={handleSubTitleClassName(props.subTitleActiveClass)}>
        Press New Game to start. First to 30 wins.
      </h2>
    </div>
  );
}

export default Title;
