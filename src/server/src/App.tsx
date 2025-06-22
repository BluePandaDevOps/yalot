import logo from './logo.svg';
import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { useSidebarContext } from './components/Sidebar/SidebarContext';
import './styles.css';
import { BrowserRouter, Route, Routes, Navigate, useLocation  } from 'react-router-dom';
import NotImplemented from './components/errorPages/NotImplemented'; // Import the NotImplemented component
import NotFoundPage from './components/errorPages/NotFoundPage';
import ProjectSelection from './components/Project/ProjectSelection'; // Project selection page
import ProjectDetails from './components/Project/ProjectDetails'; // Project details page
import CreateProject from './components/Project/CreateProject';


const App: React.FC = () => {
  const { showSidebar } = useSidebarContext();
  return (
    <div className="app">
      {showSidebar && <Sidebar />}
      <Routes>
          <Route path="/" element={<Navigate to="/home" />} /> {/* Redirect root to /home */}
          <Route path="/project-selection" element={<ProjectSelection />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/project-details/:projectId" element={<ProjectDetails />} />
          <Route path="/home" element={<ProjectSelection />} /> {/* Home page */}
          <Route path="/not-implemented" element={<NotImplemented />} /> {/* Not implemented page */}
          <Route path="*" element={<NotFoundPage />} /> {/* 404 Not Found */}
      </Routes>
    </div>
  );
};

export default App;