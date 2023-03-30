import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import Search from "../Search";
import Card from "../Card";
import Grid from "../Grid";
import CalendarDiv from "../CalendarDiv";

//CSS
import "./secondpage.css";


function Secondpage() {
  const [searchValue, setSearchValue] = useState("");
  const [plantData, setPlantData] = useState([]);
  const plantList = plantData || [];

  return (
    <Fragment>
      
      <Nav />
      <div className="container">
        <Column>
            <h2>Search for a houseplant & add it to your collection</h2>
            
            <Search
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              setPlantData={setPlantData}
            />
            
            <div id="mobile-grid" className = "my-plants">
              <Grid>
                {plantList.length === 0 ? (<h3 className="muted">Use the search bar to search for plants and add them to your collection</h3>) : plantList.map((plant) => (
                  <Card plant={plant} />
                ))}
              </Grid>
            </div>

            <CalendarDiv />
        </Column>
        
        <Column>
          <div id="desktop-grid" className = "my-plants">
          <Grid>
            {plantList.length === 0 ? (<h3 className="muted">Use the search bar to search for plants and add them to your collection</h3>) : plantList.map((plant) => (
              <Card plant={plant} />
            ))}
          </Grid>
          </div>
          
        </Column>
        </div>  
    </Fragment>
  );
}

export default Secondpage;