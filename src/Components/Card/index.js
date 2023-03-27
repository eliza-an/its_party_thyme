import React from "react";
import "./style.css";


export default function Card( {plant} ) {
  return (

      <div className="card" key={plant.id} >
        <div className="image-container">
            <img src={plant.default_image?.thumbnail} alt=""/>
        </div>
        <h3>{plant.common_name}</h3>
        <hr className="card-hr"/>
        <p><span className="strong">Water needs: </span>{plant.watering}</p>
        <p><span className="strong">Light: </span>{plant.sunlight}</p>
        <button className="collectionBtn" href="#">Add to collection</button>
      </div>

  );
}