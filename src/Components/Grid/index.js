import React from "react";
import "./style.css";

function Grid( props ) {
  return (
    <div className="horizontal-scroll">
      <div className="grid-container">{props.children}</div>
    </div>
  );
}

export default Grid;
