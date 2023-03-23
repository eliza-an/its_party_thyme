import React from 'react';
import './style.css';
import Row from '../Row';

function Navbar() {
  return (
    <div>
      <header id="header-full">
        <Row>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
                <li>link 1</li>
                <li>link 1</li>
            </ul>
        </Row>
      </header>

      <header id="header-mobile">
        <Row>
            <div id="logo">Plantly</div>
        </Row>  
        <Row>
            <ul id="nav-links">
                <li>link 1</li>
                <li>link 1</li>
            </ul>
        </Row> 
      </header>
    </div>
  );
}

export default Navbar;
