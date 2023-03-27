import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import Search from "../Search";
import {
  QueryClientProvider,
  QueryClient,
  useQuery,
} from "@tanstack/react-query";
import Card from "../Card";

const queryClient = new QueryClient();

function Secondpage() {
  const [searchValue, setSearchValue] = useState("");
  const [plantData, setPlantData] = useState([]);

  // const fetchPlants = async (searchValue) => {
  //     //To fetch fresh data on every fetch request using cache: no-store
  //     const response = await fetch(`https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275&q=${searchValue}`, { cache: 'no-store' });
  //     return response.json();
  // };

  // const {data, status} = useQuery("plants", () => fetchPlants(searchValue), { enabled: !!searchValue });
  const plantList = plantData || [];
  // console.log(plantList);

  /* const {data, status} = useQuery("plants", fetchPlants);
const plantList = data;*/
console.log(plantList);  



  return (
    <>
      <Nav />
      <Column />
      <Column />
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        setPlantData={setPlantData}
      />
      {/* {status === "loading" && <div>Loading data...</div>} */}
      {/* {status === "error" && <div>Error fetching data</div>} */}

      
        {plantList.length === 0 ? (<h2>No plants to display</h2>) : plantList.map((plant) => (
          <Card plant={plant} />
        ))}
       
      
    </>
  );
}

export default Secondpage;
