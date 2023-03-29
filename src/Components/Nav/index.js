import React from 'react';
import Container from '../Container';
import './style.css';
import SignupBtn from '../SignupBtn';
import { Link } from 'react-router-dom';


function Navbar(props) {


  return (
    <div>
      <header id="header-full" className="nav">
        <Container>
          <div id="logo">Plantly</div>
          <ul id="nav-links">
            <li>
              <Link to="/your-plants">
                {' '}
                <SignupBtn text="Your Plants" />
              </Link>
              <Link to="/Calendar">
                {' '}
                <SignupBtn text="Calendar" />
              </Link>
            </li>
            <li>
              <Link to="/">
                {' '}
                <SignupBtn text="Log Out" />
              </Link>
            </li>
            <li></li>
          </ul>
        </Container>
      </header>

      <header id="header-mobile" className="nav">
        <Container>
          <div id="logo">Plantly</div>
        </Container>
        <Container>
          <ul id="nav-links">
            <Link to="/your-plants">
              {' '}
              <SignupBtn text="Your Plants" />
            </Link>
            <Link to="/">
              {' '}
              <SignupBtn text="Log Out" />
            </Link>
          </ul>
        </Container>
      </header>
    </div>
  );
}

export default Navbar;



