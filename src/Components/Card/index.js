

export default function Card({plant}) {
    return (
        <div className='card'>
            <img className='cardImage' src={plant.default_image.small_url} alt={plant.common_name} /> {/* /*  I think this is correct route through the data set for the image*/ }
        
         <div className='text-container'>
            <h4 className='plantTitle'>{plant.common_name}</h4>
            <p className="wateringStatus"> {plant.common_name} needs {plant.watering} </p>
            <p classname="moreDetails"> Click here for more care information about {plant.common_name} </p> {/* add modal opening functionality later  */}
             </div>
        
     </div>

    )
}