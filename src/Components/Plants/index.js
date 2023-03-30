import React from 'react';
import {useQuery} from '@tanstack/react-query';
import Card from '../Card';

export default function PlantsCopy () {

    const fetchPlants = async () => {
        const response = await fetch("https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275")
        return response.json();
    }

    const {data:plantData, status} = useQuery(["plants"], fetchPlants)

    if(status === "loading") {
        return <div>Loading ...</div>
    }

    if(status === "error") {
        return <div>Error ...</div>
    }

    return (
        <div>
            {plantData.data.map((plant) => (
                <Card plant={plant}/>
            ))}
        </div>
    );
};