import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import HeaderWithTabs from '../Tabs/HeaderWithTabs';
import { useSidebarControl } from '../Sidebar/SidebarControl';

const ProjectDetails: React.FC = () => {
    useSidebarControl(true); 
    const { projectId } = useParams<{ projectId?: string }>();

    const navigate = useNavigate();
    // Redirect to ProjectSelection if projectId is undefined or invalid
    if (!projectId) {
        navigate('/project-selection', { replace: true });
        return null; // Return null to prevent rendering the rest of the component
    }

    return (
        <div>
        <h1>Project Details for: {projectId}</h1>
        <HeaderWithTabs projectId={projectId} />
        </div>
    );
};

export default ProjectDetails;
