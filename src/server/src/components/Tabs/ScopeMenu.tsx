import React, { useState, useEffect } from 'react';
import { IScope, IProject } from '../interfaces/types'; // Import Scope interface from shared types


const ScopeMenu: React.FC<IProject> = ({ projectId }) => {
  const [scopeData, setScopeData] = useState<IScope[]>([]);

  useEffect(() => {
    const fetchScope = async () => {
      // Fetch data based on projectName (currently using dummy data)
      const data: IScope[] = [
        {
          id: 1,
          time_created: '2024-09-01T10:00:00Z',
          time_modified: '2024-09-05T12:00:00Z',
          scope_type: 'Feature',
          scope_value: 'Add user authentication',
          scope_status: 'In Progress',
          scope_source: 'Backend',
          scope_description: 'Implement OAuth 2.0 for user login',
        },
        {
          id: 2,
          time_created: '2024-08-20T14:30:00Z',
          time_modified: '2024-08-25T09:00:00Z',
          scope_type: 'Bug',
          scope_value: 'Fix UI overflow issue',
          scope_status: 'Resolved',
          scope_source: 'Frontend',
          scope_description: 'Resolve text overflow issue on small screens',
        },
        {
          id: 3,
          time_created: '2024-07-15T09:00:00Z',
          time_modified: '2024-08-01T18:00:00Z',
          scope_type: 'Improvement',
          scope_value: 'Optimize database queries',
          scope_status: 'Completed',
          scope_source: 'Database',
          scope_description: 'Improve query performance for large datasets',
        },
      ];
      setScopeData(data);
    };

    fetchScope();
  }, [projectId]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Value</th>
            <th>Status</th>
            <th>Source</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {scopeData.map((scope) => (
            <tr key={scope.id}>
              <td>{scope.scope_type}</td>
              <td>{scope.scope_value}</td>
              <td>{scope.scope_status}</td>
              <td>{scope.scope_source}</td>
              <td>{scope.scope_description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ScopeMenu;
