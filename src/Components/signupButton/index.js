import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SignUpBtn(props) {
    return (
        <Link to="/your-plants">
        <button
            onClick={props.onClick}
            className={`signUpBtn ${props.type}`}
            data-value={props.type}
            > Sign Up Now
                {props.type}
        </button>
        </Link>
    )
}
export default SignUpBtn