export interface User {
  id: string;
  email: string;
  name: string | null;
  phone: string | null;
  occupation: string | null;
  organization: string | null;
  role: 'admin' | 'intern';
  created_at: string;
}

export interface Internship {
  id: string;
  title: string;
  description: string;
  domain: string;
  tasks: Task[];
  price: number;
  status: 'locked' | 'unlocked';
  created_at: string;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  completed: boolean;
}

export interface Application {
  id: string;
  intern_id: string;
  domain: string;
  details: Record<string, any>;
  created_at: string;
}