import React, { useState } from "react";
import { FaHome, FaUser, FaCog, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true); // Sidebar state for collapse

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar" : "sidebar collapsed"}>
      <h2 className="menu-title">Menu</h2>
      <div className="toggle-btn" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-items">
        <Link to="/" className="sidebar-item">
          <FaHome className="icon" />
          {isOpen && <span>Home</span>}
        </Link>
        <Link to="/not-implemented" className="sidebar-item">
          <FaUser className="icon" />
          {isOpen && <span>Profile</span>}
        </Link>
        <Link to="/not-implemented" className="sidebar-item">
          <FaCog className="icon" />
          {isOpen && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
