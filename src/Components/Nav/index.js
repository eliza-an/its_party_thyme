import React, {Fragment} from 'react';
import Container from '../Container';
import './style.css';
import SignupBtn from '../SignupBtn';
import { Link } from 'react-router-dom';


function Navbar(props) {


  return (
    <Fragment>
      <div id="pageOne">
        <header id="header-full" className="nav">
          <Container>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
              <li>
                <Link to="/your-plants">
                  {' '}
                  <SignupBtn text="Your Plants" />
                </Link>
              </li>
              <li>
                <Link to="/">
                  {' '}
                  <SignupBtn text="Log Out" />
                </Link>
              </li>
            </ul>
          </Container>
        </header>

        <header id="header-mobile" className="nav">
          <Container>
            <div id="logo">Plantly</div>
          </Container>
          <Container>
            <ul id="nav-links">
              <li>
                <Link to="/your-plants">
                  {' '}
                  <SignupBtn text="Your Plants" />
                </Link>
              </li>
              <li>
              <Link to="/">
                {' '}
                <SignupBtn text="Log Out" />
              </Link>
              </li>
            </ul>
          </Container>
        </header>
      </div>

    </Fragment>
  );
}

export default Navbar;



