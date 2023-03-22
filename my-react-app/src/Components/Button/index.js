import React from 'react';
import './style.css';

function Button(props) {
    return (
        <button
            onClick={props.onClick}
            className={`button ${props.type}`}
            data-value={props.type}
            >
                {props.type}
        </button>
    )
}