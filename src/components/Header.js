import React from 'react';
import { Link } from 'react-router-dom'; 
import './Header.css';

const Header = () => {
  return (
    <nav className="adminHeader">
      <div className="adminHeader-logo">Admin Panel</div>
      <ul className="adminHeader-links">
        <li><Link to="/admin">Admin</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
