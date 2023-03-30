import React, {Fragment} from "react";
import NavFavourites from "../NavFavourites";
import Column from "../Column";
import Grid from "../Grid";
import CalendarDiv from "../CalendarDiv";

//CSS
import "../Favourites/favourite.css"
import "../Card/style.css";


const Favourites = () =>{
   const myplantsString = localStorage.getItem('myplants');
    const myplants = myplantsString? JSON.parse(myplantsString) : [];


    const uniqueplants = myplants.filter((plant, index, self) =>
    index === self.findIndex((p) => (
      p.id === plant.id
    ))
    );
    return(
      <Fragment>
        <NavFavourites/>
        <div className = "container">
          <Column>
          <h2>My Plants</h2>
          <div className="my-plants">
              <Grid>
                {uniqueplants.map(plant => (
                <div className="card" id="favourites-card" key={plant.id} >
                  <div className="image-container">
                      <img src={plant.default_image?.thumbnail} alt=""/>
                  </div>
                  <h3>{plant.common_name}</h3>
                  <hr className="card-hr"/>
                  <p><span className="strong">Water needs: </span>{plant.watering}</p>
                  <p><span className="strong">Light: </span>{plant.sunlight}</p>
                </div>
                ))}
              </Grid>
            </div>
          </Column>
          <Column>
                <CalendarDiv />
          </Column>
        </div> 
      </Fragment>)
 }
  

export default Favourites;



