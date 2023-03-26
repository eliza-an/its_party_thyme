import './App.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// npm i react-datepicker
// npm i react-big-calendar

const localizer = momentLocalizer(moment);
function Calendar() {
  // create one plant
  const [plant, setPlant] = useState({ title: '', start: '', end: '' });
  const [username, setUserName] = useState('username');
  // create group of plants (when you with click button createArray run)
  const [plants, setAllPlant] = useState([]);

  const createArray = () => {
    // all the existing plants plus add the new plant (spread)
    setAllPlant([...plants, plant]);
  };

  localStorage.setItem(username, JSON.stringify(plants));

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
        </div>
      </div>
    </div>
  );
}
export default Calendar;
