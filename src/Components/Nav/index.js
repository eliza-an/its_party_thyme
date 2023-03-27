import React from 'react';
import Row from '../Row';
import './style.css';

function Navbar() {
  return (
    <div>
      <header id="header-full" className="nav">
        <Row>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
                <li><a href="https://www.google.com/">link 1</a></li>
                <li><a href = "https://www.google.com/">link 2</a></li>
            </ul>
        </Row>
      </header>

      <header id="header-mobile" className="nav">
        <Row>
            <div id="logo">Plantly</div>
        </Row>  
        <Row>
            <ul id="nav-links">
                <li><a href="https://www.google.com/">link 1</a></li>
                <li><a href = "https://www.google.com/">link 2</a></li>
            </ul>
        </Row> 
      </header>
    </div>
  );
}

export default Navbar;
