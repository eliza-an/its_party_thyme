import React from 'react';
import './style.css';

function SignUpBtn(props) {
    return (
        <button
            onClick={props.onClick}
            className={`signUpBtn ${props.type}`}
            data-value={props.type}
            >
                {props.type}
        </button>
    )
}
export default SignUpBtn