import React from "react";
import "./style.css";



export default function Card( {plant} ) {
 function favourites(){
  const myplantsString=localStorage.getItem('myplants')
  const myplants=myplantsString ? JSON.parse(myplantsString) : [];
  myplants.push(plant);
localStorage.setItem("myplants",JSON.stringify(myplants))

} 
return (
      <div className="card" key={plant.id} >
        <div className="image-container">
            <img src={plant.default_image?.thumbnail} alt=""/>
        </div>
        <h3>{plant.common_name}</h3>
        <hr className="card-hr"/>
        <p><span className="strong"><i className="fa fa-droplet"></i>Water needs: </span>{plant.watering}</p>
        <p><i className="fa fa-sun"></i><span className="strong">Likes: </span>{plant.sunlight}</p>
        <button onClick={favourites} id="collectionBtn"><i className="fa fa-plus"></i></button>
      </div>

  );
}



