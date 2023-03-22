import React from 'react';
import { useQuery } from 'react-query';

export default function Characters() {
    const fetchCharacters = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        return response.json();
    };

    const {data, status} = useQuery("characters", fetchCharacters([]))
    
    console.log(status);

    if (status === "loading") {
        return <div>Loading...</div>
    };

    if (status === "error") {
        return <div>Error</div>
    };

    return (
    <div>
        {data.results.map((character) => (
            <div>{character.name}</div>
        ))}
    </div>
  )
}

