import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// npm i react-datepicker
// npm i react-big-calendar

let username = 'username';
const localizer = momentLocalizer(moment);
function Calendar() {
  let localKeys = Object.keys(localStorage);
  let house;
  // check if username exist                  if yes  then house = username value             if no then create username value []
  localKeys.includes(username) ? (house = JSON.parse(localStorage.getItem(username))) : localStorage.setItem(username, '[]');
  //  check if username exist                if yes  then house = username value
  localKeys.includes(username) ? (house = JSON.parse(localStorage.getItem(username))) : console.log('ej ej something is not okey Pete');
  // create one plant
  const [plant, setPlant] = useState({ title: '', start: '', end: '' });
  // create group of plants (when you with click button createArray run) and adds the data to "house" variable
  const [plants, setAllPlant] = useState(house);
  const createArray = () => {
    // all the existing plants plus add the new plant
    setAllPlant([...plants, plant]);
  };
  // upload data to localstorage
  // const createLocalStorage = () => {
  //   localStorage.setItem(username, JSON.stringify(plants));
  // };

  useEffect(() => {
    localStorage.setItem(username, JSON.stringify(plants));
  }, [plants]);

  console.log(plants);
  return (
    <div className="App">
      <div>
        <div>
          <Calendar localizer={localizer} events={plants} startAccessor="start" endAccessor="end" style={{ margin: '100px', height: 500 }} />
        </div>
        <h1>add new plant</h1>
        <div>
          {/* update with data the existing empty plant variable */}
          <input type="text" placeholder="Plant" value={plant.title} onChange={(title) => setPlant({ ...plant, title: title.target.value })} />
          <DatePicker placeholderText="Date" selected={plant.start} onChange={(start) => setPlant({ ...plant, start: start })} />
          <DatePicker placeholderText="Date" selected={plant.end} onChange={(end) => setPlant({ ...plant, end: end })} />
          <button onClick={createArray}>Add Plant</button>
          {/* <button onClick={createLocalStorage}>Save Data</button> */}
        </div>
      </div>
    </div>
  );
}
export default Calendar;
