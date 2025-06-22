import React from 'react';
import { FaSmileWink } from 'react-icons/fa'; // Cute icon from react-icons
import './NotImplemented.css'; // CSS for styling
import { useSidebarControl } from '../Sidebar/SidebarControl';
import { useNavigate } from 'react-router-dom';

const NotImplemented: React.FC = () => {
  useSidebarControl(false); 
  const navigate = useNavigate(); // Initialize useNavigate
  useSidebarControl(false); 
  return (
    <div className="not-implemented">
      <FaSmileWink className="icon" />
      <h1>Page Coming Soon!</h1>
      <p>We're working on it. Stay tuned!</p>
      <button onClick={() => navigate(-1)} className="back-button">
        Go Back
      </button>
    </div>
  );
};

export default NotImplemented;
export {};