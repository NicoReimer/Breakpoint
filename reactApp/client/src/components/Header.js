import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="header-icons">
        <span className="notification-icon">🔔</span>
        <span className="profile-icon">👤</span>
      </div>
    </header>
  );
}

export default Header;