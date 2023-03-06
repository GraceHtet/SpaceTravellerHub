import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/planet.png';
import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="logo-container">
          <img src={logo} alt="logo" className="logo-icon" />
          <span className="logo-text">Space Traveler's Hub</span>
        </div>
        <div className="navbar">
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>|<NavLink to="/profile">My Profile</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
