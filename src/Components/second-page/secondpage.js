import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import Search from "../Search";
import Card from "../Card";
import Grid from "../Grid";
import CalendarDiv from "../CalendarDiv";


function Secondpage() {
  const [searchValue, setSearchValue] = useState("");
  const [plantData, setPlantData] = useState([]);

  const plantList = plantData || [];


  return (
    <Fragment>
      <Nav />
      <Column>
          <div className="container">
          <h3>Search for a houseplant & add it to your collection</h3>
          
          <Search
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            setPlantData={setPlantData}
          />
          </div>
          <CalendarDiv />
      </Column>
      
      <Column>
        <Grid>
        {plantList.length === 0 ? (<h4>No plants to display</h4>) : plantList.map((plant) => (
          <Card plant={plant} />
        ))}
        </Grid>
      </Column>
        
    </Fragment>
  );
}

export default Secondpage;