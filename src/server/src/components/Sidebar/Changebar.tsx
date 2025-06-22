// Changebar.tsx
import React from 'react';
import './Changebar.css'; // Ensure this CSS file contains the styles above

interface ChangebarProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate?: () => void; // Optional
  onDelete?: () => void; // Optional
}

const Changebar: React.FC<ChangebarProps> = ({ isOpen, onClose, onCreate, onDelete }) => {
  return (
    <div className={`changebar ${isOpen ? 'open' : ''}`}>
      <button onClick={onClose} className="closeChangebarButton">X</button>
      {onCreate ? (
        <>
          <h2>Create New Project</h2>
          <button onClick={onCreate} className="changebarButton">Create Project</button>
        </>
      ) : (
        <>
          <h2>Confirm Deletion</h2>
          <p>Are you sure you want to delete this project?</p>
          <button onClick={onDelete} className="changebarButton">Delete Project</button>
        </>
      )}
    </div>
  );
};

export default Changebar;
