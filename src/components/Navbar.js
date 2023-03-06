import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import logo from '../assets/img/planet-color.png'
import styles from '../styles/Navbar.module.css'

const Navbar = () => {
  return (
    <>
      <nav>
        <div className={styles.logoContainer}>
          <img src={logo} alt="logo" className={styles.logoIcon} />
          <span className={styles.logoText}>Space Traveler's Hub</span>
        </div>
        <div className={styles.navbar}>
          <NavLink to="/">Rockets</NavLink>
          <NavLink to="/missions">Missions</NavLink>|<NavLink to="/profile">My Profile</NavLink>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
