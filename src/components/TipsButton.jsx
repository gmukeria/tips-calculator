import React from "react";

import "./tips-button.css";

const TipsButton = props => {
  let activeClass = props.tipPercent === props.tipValue ? "active-tip" : "";

  return (
    <button
      className={"tips " + activeClass}
      onClick={() => props.changeTip(props.tipValue)}
    >
      {props.tipValue}%
    </button>
  );
};

export default TipsButton;
