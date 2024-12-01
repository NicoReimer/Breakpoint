import React from 'react';
import './Sidebar.css';
import { FaHome, FaBook, FaUser } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="sidebar-logo">WikiDashboard</h2>
      <ul className="sidebar-menu">
        <li><FaHome className="icon" /> Home</li>
        <li><FaBook className="icon" /> Articles</li>
        <li><FaUser className="icon" /> Profile</li>
      </ul>
    </div>
  );
}

export default Sidebar;