import { Task } from "../models/Task";

export class TaskMapper {
  public static toJSON = (task: Task)=> {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      state: task.state,
      createdAt: task.createdAt,
      owner: task.owner
    }
  }
}
