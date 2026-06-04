export type Task = {
    id: number;
    name: string;
    startDate: string;
    endDate: string;
    // progress: number | string | undefined;
    updatedBy: string;
    status: 'completed' | 'inprogress' | 'notstarted' | 'delay';
    lastUpdated: string;
    completed: number;
    inprogress: number;
    atrisk: number,
    delayed: number,
    pending: number,
    notstarted: number,
    autocomplete: number,

  };
  
  export type Milestone = {
    id: number;
    title: string;
    status: 'completed' | 'delay' | 'notstarted' | 'inprogress';
    assignedTo?: string;
    date?: string;
  };
  
  export type Step = {
    id: number;
    title: string;
    status: 'completed' | 'delay' | 'notstarted' | 'inprogress';
  };
  