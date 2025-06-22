export interface IScope {
    id: number;
    time_created: string;
    time_modified: string;
    scope_type: string;
    scope_value: string;
    scope_status: string;
    scope_source: string;
    scope_description: string;
  }

export interface IProject {
    projectId: string;
    projectName?: string;
  }