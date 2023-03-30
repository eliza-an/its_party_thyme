import React from 'react';
import './style.css';

function Btn(props) {
    return (
      <button className={props.className} >
        {props.text}
      </button>
    )
}
export default Btn