export interface Task {
  id: string;
  title: string;
  state: string;
  description: string;
  createdAt: string;
  owner: string;
  isDeleted: boolean;
}
