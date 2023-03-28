import React from 'react';
import Row from '../Row';
import './style.css';
import SignupBtn from "../SignupBtn";
import { Link } from 'react-router-dom';


function Navbar(props) {


  return (
    <div>
      <header id="header-full" className="nav">
        <Row>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
              <li>
              <Link to="/your-plants">  <SignupBtn text="Your Plants"/></Link>
              </li>
              <li>
              <Link to="/">  <SignupBtn text="Log Out"/></Link>
              </li>
            </ul>
        </Row>
      </header>

      <header id="header-mobile" className="nav">
        <Row>
            <div id="logo">Plantly</div>
        </Row>  
        <Row>
            <ul id="nav-links">
              <Link to="/your-plants">  <SignupBtn text="Your Plants"/></Link>
              <Link to="/">  <SignupBtn text="Log Out"/></Link>            
            </ul>
        </Row> 
      </header>
    </div>
  );
}

export default Navbar;



