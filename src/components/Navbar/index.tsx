import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="navbar-link">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/orbit" className="navbar-link">Orbit</Link>
        </li>
        <li className="navbar-item">
          <Link to="/loading" className="navbar-link">Loading</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
