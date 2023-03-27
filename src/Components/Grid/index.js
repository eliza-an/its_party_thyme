import React from "react";
import "./style.css";

function Grid(props) {
  return <div className="grid-container">{props.children}</div>;
}

export default Grid;
