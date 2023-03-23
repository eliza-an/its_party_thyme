import React from 'react';
import { useQuery } from 'react-query';


export default function Plants() {
        
    const fetchPlants = async () => {
        //To fetch fresh data on every fetch request using cache: no-store
        const response = await fetch("https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275", { cache: 'no-store' });
        return response.json(); 
    };

    const {data, status} = useQuery("plants", fetchPlants);
    
    if(status === "loading") {
        <div>Loading...</div>
    };

    if(status === "error") {
    <div>Error</div>
    };

    return (
        <div>

        </div>
    );

};