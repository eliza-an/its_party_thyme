import React from 'react';
import './style.css';


function SignupBtn(props) {
    return (
        
        <button className={props.className} >
        {props.text}
      </button>
      
    )
}
export default SignupBtn