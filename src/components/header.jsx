import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { supabase } from '../supabase';
import './header.css';
import myLogo from '../assets/image 1.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navLinks, setNavLinks] = useState([]);


  useEffect(() => {
    getNavLinks();
  }, []);


  async function getNavLinks() {
    const result = await supabase
      .from('nav_links')
      .select('*')
      .order('order_index', { ascending: true });

    if (result.data) {
      setNavLinks(result.data);
    }
  }

  return (
    <header className="main-header">
      <div className="header-container">

        <div className="logo">
          <img src={myLogo} alt="Health Africa Logo" />
        </div>

        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav-component ${menuOpen ? "open" : ""}`}>
          <ul>
            {navLinks.map(function(link) {
              return (
                <li key={link.id}>
                  <NavLink
                    to={link.url}
                    className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
                  >
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;