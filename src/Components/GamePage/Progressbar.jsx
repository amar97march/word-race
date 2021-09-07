import React from "react";
import "../../css/game-section.css";

const ProgressBar = (props) => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  );
};

const Filler = (props) => {
  return <div className="filler" style={{ height: `${props.percentage}%` }} />;
};
export default ProgressBar;
