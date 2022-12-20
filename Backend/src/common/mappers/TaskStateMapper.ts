import { TaskState } from "../models/TaskState";

export class TaskStateMapper {
  public static toJSON = (taskState: TaskState)=> {
    return {
      id: taskState.id,
      image: taskState.image,
      value: taskState.value,
      createdAt: taskState.createdAt
    }
  }
}
