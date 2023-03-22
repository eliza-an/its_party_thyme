import React from 'react;

export default function Plants({plant}) {
    return (
        <div className='card'>
            <img src={plant.default_image.small_url} alt={plant.common_name} /> /*  I think this is correct route through the data set for the image*/
        
         <div className='text-container'>
            <h4>{plant.common_name}</h4>
            <p className="wateringStatus"> {plant.common_name} needs {plant.watering} </p>
            <p classname="moreDetails"> Click here for more care information about {plant.common_name} </p>
            </div>
        
     </div>

    )
}