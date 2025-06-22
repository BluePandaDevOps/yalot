// CreateProject.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../css/title.module.css';

const CreateProject: React.FC = () => {
  const [projectName, setProjectName] = useState('');
  const navigate = useNavigate();

  const handleCreateProject = () => {
    // Add logic to create a new project (e.g., API call)
    // Then navigate to the project details page or project selection page
    navigate('/project-selection');
  };

  return (
    <div>
      <h1 className={styles.pageTitle}>Create New Project</h1>
      <form>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </label>
        <button type="button" onClick={handleCreateProject} className={styles.createButton}>
          Create Project
        </button>
      </form>
    </div>
  );
};

export default CreateProject;
