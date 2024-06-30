// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-button">
          {isOpen ? '=' : '='}
        </button>
        <h2 className="sidebar-title">Admin Panel</h2>
      </div>
      <ul className="sidebar-menu">
      <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/user-login">User Login</Link></li>
        <li><Link to="/admin-login">Admin Login</Link></li>
        <li><Link to="/add-category">Add Category</Link></li>
        <li><Link to="/add-movie">Add Movie</Link></li>
        <li><Link to="/showtime-management">Showtime Management</Link></li>
        <li><Link to="/booked-movies">Booked Movies</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
