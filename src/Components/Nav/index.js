import React from 'react';
import Row from '../Row';
import './style.css';
import SignupBtn from "../SignupBtn";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

function Navbar(props) {
  const route = useLocation();
  const history = useNavigate();
  let btnText = '';

  if (route.pathname === '/browse' && route.className==="yours") {
    btnText= 'Your plants';
  } else if (route.pathname === '/your-plants' && route.className==="yours") {
    btnText = 'Select a plant';
  }  
  return (
    <div>
      <header id="header-full" className="nav">
        <Row>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
              <Link to="/your-plants">  <SignupBtn className="yours" />{btnText}</Link>
              <Link to="/">  <SignupBtn text="Log Out"/></Link>
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



