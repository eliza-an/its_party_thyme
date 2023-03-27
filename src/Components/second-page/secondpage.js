import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import  Search  from "../Search";
import { QueryClientProvider,  QueryClient, useQuery } from "@tanstack/react-query"


const queryClient = new QueryClient();

function Secondpage () {
    const [searchValue, setSearchValue] = useState('')
console.log(searchValue)

const fetchPlants = async (searchValue) => {
    //To fetch fresh data on every fetch request using cache: no-store
    const response = await fetch(`https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275&q=${searchValue}`, { cache: 'no-store' });
    return response.json(); 
};



const {data, status} = useQuery("plants", () => fetchPlants(searchValue), { enabled: !!searchValue });
const plantList = data || [];
console.log(plantList);


/* const {data, status} = useQuery("plants", fetchPlants);
const plantList = data;
console.log(plantList);  */






    return(
        
            <QueryClientProvider client={queryClient} >
            <Nav/>
            <Column />
            <Column />
            <Search  searchValue={searchValue} setSearchValue={setSearchValue} />
            {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {plantList.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      )}
    
        </QueryClientProvider>
    )

}

export default Secondpage;


{/* <Search searchValue={searchValue} setSearchValue={setSearchValue} />

{useQueries([
  { queryKey: "plants", queryFn: fetchPlants }
]).map((query, index) => {
  const { data, status } = query;
  const plantList = data;

  return (
    <React.Fragment key={index}>
      {status === "loading" && <div>Loading data...</div>}
      {status === "error" && <div>Error fetching data</div>}
      {status === "success" && (
        <ul>
          {plantList.map((plant) => (
            <li key={plant.id}>{plant.name}</li>
          ))}
        </ul>
      )}
    </React.Fragment>
  )
})} */}