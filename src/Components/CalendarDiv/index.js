import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import './Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Fragment } from 'react';
import { useLocalStorage } from './useLocalStorage';

// npm i react-datepicker
// npm i react-big-calendar

let username = 'partythyme';

const localizer = momentLocalizer(moment);
function CalendarDiv() {
  
  // create one plant
  
  const [plant, setPlant] = useState({ title: '', start: '', end: '' });
  const [plants, setAllPlant]=useLocalStorage(username, '')
  // create group of plants (when you with click button createArray run) and adds the data to "house" variable
//   const [plants, setAllPlant] = useState(() =>{
// let house =[];
//   let localKeys = Object.keys(localStorage); 
//   console.log(localKeys)
//   if(localKeys.includes(username)){

//  let house= localStorage.getItem(username)

// }

//   // check if username exist                  if yes  then house = username value             if no then create username value []
//   // localKeys.includes(username) ? (house = JSON.parse(localStorage.getItem(username))) : localStorage.setItem(username, '[]');
//   console.log(house)
// return house ;


//   });
  const createArray = () => {
    // all the existing plants plus add the new plant
    setAllPlant([...plants, plant]);
  };



  // useEffect(() => {
    
  //   localStorage.setItem(username, JSON.stringify(plants));
  
    
  // }, [plants]);

  return (
    <Fragment>
      <div>
        <h3 className="sub-header">Add a watering</h3>
        <div>
          {/* update with data the existing empty plant variable */}
        <input type="text" placeholder="Plant" value={plant.title} onChange={(title) => setPlant({ ...plant, title: title.target.value })} />
          <span className="inline">

          <DatePicker placeholderText="Date" selected={plant.start} onChange={(start) => setPlant({ ...plant, start: start })} />
          <DatePicker placeholderText="Date" selected={plant.end} onChange={(end) => setPlant({ ...plant, end: end })} />
          <button className="add-to-calendarBtn" onClick={createArray}><i className="fa fa-plus"></i></button>

          </span>
        </div>
      </div>
      <div className="calendar">
        <Calendar localizer={localizer} events={plants} startAccessor="start" endAccessor="end" />
      </div>
      </Fragment>
  );
}
export default CalendarDiv;
