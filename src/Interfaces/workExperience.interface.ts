export interface IExperience {
  id: string;
  role: string;
  company: string;
  type: string;
  duration: string;
  location: string;
  workModel?: string;
  description?: string;
  skills?: string[];
}
