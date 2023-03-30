import React from 'react';
import './style.css';

function signupBtn(props) {
    return (
        <button id="signupBtn" disabled={props.isDisabled}
        className={props.className} >
        {props.text}
      </button>
    );
}

export default signupBtn
