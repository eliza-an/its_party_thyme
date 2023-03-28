import { useLocation } from 'react-router-dom';
import React from 'react';
import './style.css';


function SignupBtn(props) {

  return (
        
        <button disabled={props.isDisabled}
        className={props.className} >
        {props.text}
      </button>
      
    )
}
export default SignupBtn