import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Container from '../Container';
import SignupBtn from '../SignupBtn';

//CSS
import './style.css';


function NavFavourites(props) {

  return (
    <Fragment>
        <header id="header-full" className="nav">
          <Container>
            <div id="logo">Plantly</div>
            <ul id="nav-links">
              <li>
                <Link to="/browse">
                  {' '}
                  <SignupBtn text="Find Plants" />
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
                <Link to="/browse">
                  {' '}
                  <SignupBtn text="Find Plants" />
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
    </Fragment>
  );
}

export default NavFavourites;



