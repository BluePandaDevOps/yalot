import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderWithTabs.css'; // Import your CSS
import ScopeMenu from './ScopeMenu';
import { IProject } from '../interfaces/types'

const HeaderWithTabs: React.FC<IProject> = ({ projectId }) => {
  const [activeTab, setActiveTab] = useState<string>('tab1'); // Ensure type is string
  const navigate = useNavigate();
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId); 
  };

    // Redirect to ProjectSelection if projectId is undefined or invalid
    if (!projectId) {
      navigate('/project-selection', { replace: true });
      return null; // Return null to prevent rendering the rest of the component
    }

  return (
    <div className="header">
      <div className="tabs">
        <div
          className={`tab ${activeTab === 'tab1' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab1')}
        >
          Scope
        </div>
        <div
          className={`tab ${activeTab === 'tab2' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab2')}
        >
          Config
        </div>
        <div
          className={`tab ${activeTab === 'tab3' ? 'active' : ''}`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </div>
      </div>
      <div className="tab-content">
        <div className={`tab-pane ${activeTab === 'tab1' ? 'active' : ''}`}>
          <ScopeMenu projectId={projectId} />
        </div>
        <div className={`tab-pane ${activeTab === 'tab2' ? 'active' : ''}`}>
          Content for Tab 2
        </div>
        <div className={`tab-pane ${activeTab === 'tab3' ? 'active' : ''}`}>
          Content for Tab 3
        </div>
      </div>
    </div>
  );
};

export default HeaderWithTabs;
