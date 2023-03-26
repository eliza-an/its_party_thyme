import { useQuery } from '@tanstack/react-query';
import Axios from 'axios';
import './style.css';


export const Plants2 = () => {
    const { 
        data: plantList, 
        isLoading,
        isError
    } = useQuery(["plantlist"], () => {
        return Axios.get("https://perenual.com/api/species-list?page=1&key=sk-htIX6419d1b8cfc9f275"
        ).then((res) => res.data);
    });

    console.log(plantList);

    if(isLoading) {
       return  <p>Loading...</p>
    };

    if(isError) {
        return  <p>Oops - there was an error</p>
     };

    return (
        <div>This is the data: 
             {plantList.data.map(plants => (
                <div>
                <h4>{plants.common_name}</h4>
                <p>{plants.watering}</p>
                <p>{plants.id}</p>
                </div>
            ))} 
        </div>
         
    );

   

};

export default Plants2;