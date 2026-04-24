import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import myLogo from '../assets/image 1.png';

const Header = () => {
  return (
    <header className="main-header">
      <div className="header-container">
        <div className="logo">
          <img src={myLogo} alt="Health Africa Logo" />
        </div>

        <nav className="nav-component">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/exbition" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Exhibitors
              </NavLink>
            </li>
            <li>
              <NavLink to="/floorplan" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Floor Plan
              </NavLink>
            </li>
            <li>
              <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Register
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;