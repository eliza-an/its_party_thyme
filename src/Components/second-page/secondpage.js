import React, { useState, Fragment } from "react";
import Column from "../Column";
import Nav from "../Nav";
import  Search  from "../Search";
import { useQuery } from 'react-query';
import { QueryClientProvider,  QueryClient,} from 'react-query'

// import "style.css"


function Secondpage ({plants}) {
    const [searchValue, setSearchValue] = useState('')
console.log(searchValue)

const fetchPlants = async () => {
    //To fetch fresh data on every fetch request using cache: no-store
    const response = await fetch(`https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275&q=${searchValue}`, { cache: 'no-store' });
    return response.json(); 
};

const queryClient = new QueryClient();

const {data, status} = useQuery("plants", fetchPlants);
const plantList = {data};
console.log(plantList);
    return(
        
            <QueryClientProvider client={queryClient} contextSharing={true}>
            <Nav/>
            <Column />
            <Column />
            <Search  searchValue={searchValue} setSearchValue={setSearchValue} />

        </QueryClientProvider>
    )

}

export default Secondpage;


