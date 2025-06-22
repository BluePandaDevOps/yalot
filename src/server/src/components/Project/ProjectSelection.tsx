import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSidebarControl } from '../Sidebar/SidebarControl';
import './ProjectSelection.css';
import styles from '../../css/title.module.css';
import Changebar from '../Sidebar/Changebar'; // Import the Changebar component

const ProjectSelection: React.FC = () => {
  const navigate = useNavigate();
  useSidebarControl(true);

  const [projects, setProjects] = useState([
    { projectId: 'AA', projectName: 'Project Alpha', lastChanged: '2024-09-01T12:34:56Z' },
    { projectId: 'BB', projectName: 'Project Beta', lastChanged: '2024-09-02T15:30:00Z' },
    { projectId: 'GG', projectName: 'Project Gamma', lastChanged: '2024-09-03T09:20:00Z' }
  ]);

  const [isChangebarOpen, setIsChangebarOpen] = useState(false);
  const [isCreating, setIsCreating] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const handleProjectClick = (projectId: string) => {
    navigate(`/project-details/${projectId}`);
  };

  const handleCreateNewProject = () => {
    setIsCreating(true);
    setIsChangebarOpen(true);
  };

  const handleOpenDeleteChangebar = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsCreating(false);
    setIsChangebarOpen(true);
  };

  const handleDeleteProject = () => {
    if (selectedProjectId) {
      const updatedProjects = projects.filter(project => project.projectId !== selectedProjectId);
      setProjects(updatedProjects);
      setIsChangebarOpen(false);
    }
  };

  const handleCloseChangebar = () => {
    setIsChangebarOpen(false);
  };

  const handleCreateProject = () => {
    // Handle project creation logic here
    // You can navigate to a different page or handle it in this component
    setIsChangebarOpen(false);
  };

  return (
    <div>
      <h1 className={styles.pageTitle}>Select a Project</h1>
      <button onClick={handleCreateNewProject} className={styles.createButton}>
        Create New Project
      </button>
      <table>
        <thead>
          <tr>
            <th>Project ID</th>
            <th>Project Name</th>
            <th>Last Changed</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.projectId}>
              <td>{project.projectId}</td>
              <td>{project.projectName}</td>
              <td>{new Date(project.lastChanged).toLocaleDateString()} {new Date(project.lastChanged).toLocaleTimeString()}</td>
              <td>
                <button onClick={() => handleProjectClick(project.projectId)} className={styles.selectButton}>Select</button>
                <button onClick={() => handleOpenDeleteChangebar(project.projectId)} className={styles.deleteButton}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Changebar
        isOpen={isChangebarOpen}
        onClose={handleCloseChangebar}
        onCreate={isCreating ? handleCreateProject : undefined}
        onDelete={isCreating ? undefined : handleDeleteProject}
      />
    </div>
  );
};

export default ProjectSelection;
