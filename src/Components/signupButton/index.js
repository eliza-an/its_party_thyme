import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

function SignUpBtn(props) {
    return (
        <Link to="/your-plants">
        <button className={props.className} >
        {props.text}
      </button>
        </Link>
    )
}
export default SignUpBtn