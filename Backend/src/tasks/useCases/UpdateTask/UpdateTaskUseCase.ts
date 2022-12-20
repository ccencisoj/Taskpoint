import { UpdateTaskDTO } from "./UpdateTaskDTO";
import { Task } from "../../../common/models/Task";
import { TaskRepository } from "../../repositories/TaskRepository";
import { TaskNoFoundException } from "../../exceptions/TaskNoFoundException";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";
import { InvalidTaskStateException } from "../../exceptions/InvalidTaskStateException";

type Response = Promise<void>;

export class UpdateTaskUseCase {
  public static execute = async (req: UpdateTaskDTO): Response => {
    const task = await TaskRepository.findTask({id: req.taskId, owner: req.owner});
    const taskFound = !!task;

    if(!taskFound) {
      throw new TaskNoFoundException();
    }

    const taskState = await TaskStateRepository.findTaskState({value: req.state});
    const taskStateFound = !!taskState;

    if(!taskStateFound) {
      throw new InvalidTaskStateException();
    }

    const updatedTask = {
      id: task.id,
      title: req.title || task.title,
      description: req.description || task.description,
      state: req.state || task.state,
      owner: task.owner,
      createdAt: task.createdAt
    } as Task;

    await TaskRepository.saveTask(updatedTask);
  }
}
