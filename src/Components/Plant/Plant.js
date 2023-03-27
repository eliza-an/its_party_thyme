import React from "react";

export default function Plant({ plantData }) {
  return (
    <div className="card">
      <div className="text-container">
        <h3>{plantData.common_name}</h3>
        <p className="title">Last seen on</p>
        <p>{plantData.watering}</p>
      </div>
    </div>
  );
}