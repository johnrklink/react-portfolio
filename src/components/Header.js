import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css'
import ProfilePicture from '../assets/profile.png';

function Header() {
  return (
    <header className="App-Header">
      <h1>John Klink</h1>
      <img
  className='profile-img'
  src={ProfilePicture}
  alt="Profile Picture"
  style={{maxWidth: "300px", maxHeight: "300px"}}
/>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/" activeClassName="active">
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" activeClassName="active">
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" activeClassName="active">
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/resume" activeClassName="active">
              Resume
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;