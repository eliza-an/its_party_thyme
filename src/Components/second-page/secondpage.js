import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import Search from "../Search";
import Card from "../Card";
import Grid from "../Grid";


function Secondpage() {
  const [searchValue, setSearchValue] = useState("");
  const [plantData, setPlantData] = useState([]);

  const plantList = plantData || [];
console.log(plantList);  


  return (
    <>
      <Nav />
      <Column>
      <h3>Search for a houseplant & add it to your collection</h3>
      
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPlantData={setPlantData}
      />
      </Column>
   
      <Column>
        <Grid>
        {plantList.length === 0 ? (<h4>No plants to display</h4>) : plantList.map((plant) => (
          <Card plant={plant} />
          
        ))}
        </Grid>
      </Column>
        
    </>
  );
}

export default Secondpage;