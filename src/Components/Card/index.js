import React from "react";
import "./style.css";


export default function Card( {plants} ) {
  return (
    <div className="card-container">
        {plants.map((entry) =>
            <div className="card" key={entry.id} >
            <div className="image-container">
                <img src={entry.default_image?.thumbnail} alt=""/>
            </div>
            <h3>{entry.common_name}</h3>
            <hr className="card-hr"/>
            <p><span className="strong">Water needs: </span>{entry.watering}</p>
            <p><span className="strong">Light: </span>{entry.sunlight}</p>
            <button className="collectionBtn" href="#">Add to collection</button>
            </div>
        )}
    </div>
  );
}