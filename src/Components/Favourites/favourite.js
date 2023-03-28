import React from "react";
import Navbar from "../Nav";
import "../Card/style.css";



const Favourites= () =>{
   const myplantsString = localStorage.getItem('myplants');
    const myplants = myplantsString? JSON.parse(myplantsString) : [];


    const uniqueplants = myplants.filter((plant, index, self) =>
    index === self.findIndex((p) => (
      p.id === plant.id
    ))
  );
    return(
        <div>
      <Navbar/>
       <div>
            {uniqueplants.map(plant => (
            <div className="card" key={plant.id} >
            <div className="image-container">
                <img src={plant.default_image?.thumbnail} alt=""/>
            </div>
            <h3>{plant.common_name}</h3>
            <hr className="card-hr"/>
            <p><span className="strong">Water needs: </span>{plant.watering}</p>
            <p><span className="strong">Light: </span>{plant.sunlight}</p>
           
            </div>
        
    ))};
 </div> 
 </div>)
 }
  
  

export default Favourites;



