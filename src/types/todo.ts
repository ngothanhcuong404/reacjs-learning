export interface M_Todo {
    id: number;
    title: string;
    description?: string;
    dueDate?: string; 
    priority: "low" | "medium" | "high";
    completed: boolean;
    tags?: string[];
    createdAt: string;
  }
  