import React from 'react';
import { Link } from 'react-router-dom'; // To allow navigation back to a valid route
import './NotFoundPage.css'; // Optional: Add some styling
import { useSidebarControl } from '../Sidebar/SidebarControl';

const NotFoundPage: React.FC = () => {
  useSidebarControl(false); 
  return (
    <div className="not-found">
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      <Link to="/">Go back to Home</Link>
    </div>
  );
};

export default NotFoundPage;
export {};