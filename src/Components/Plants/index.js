import React, { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import Plant from "./Plant";

export default function Plants() {
  const [page, setPage] = useState(40);

  const fetchPlants = async ({ queryKey }) => {
    const response = await fetch(
        'https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275'
    );
    return response.json();
  };



  const { data: plantInfo, status, isPreviousData } = useQuery(
    ["plants", page],
    fetchPlants,
    {
      keepPreviousData: true,
    }
  );

  console.log(plantInfo)

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Oops - something has gone wrong</div>;
  }

  return (
    <div className="plants">
      {plantInfo.data.map((plant) => (
        <div>
        <Plant plant={plant} />
        {/* <PlantDetails plant={plant} /> */}
        </div>
      ))}
    </div>
  );
}