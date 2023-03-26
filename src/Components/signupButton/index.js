import React from 'react';
import './style.css';


function SignUpBtn(props) {
    return (
        
        <button className={props.className} >
        {props.text}
      </button>
      
    )
}
export default SignUpBtn