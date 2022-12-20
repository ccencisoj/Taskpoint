import { CreateTaskDTO } from "./CreateTaskDTO";
import { Task } from "../../../common/models/Task";
import { generateId } from "../../../common/helpers/generateId";
import { TaskRepository } from "../../repositories/TaskRepository";
import { getCurrentDate } from "../../../common/helpers/getCurrentDate";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";
import { InvalidTaskStateException } from "../../exceptions/InvalidTaskStateException";

type Response = Promise<Task>;

export class CreateTaskUseCase {
  public static execute = async (req: CreateTaskDTO): Response => {
    const stateFound = !!(await TaskStateRepository.findTaskState({value: req.state}));

    if(!stateFound) {
      throw new InvalidTaskStateException();
    }

    const taksId = generateId();
    const createdAt = getCurrentDate();

    const task = {
      id: taksId,
      title: req.title,
      description: req.description,
      state: req.state,
      createdAt: createdAt,
      owner: req.owner
    } as Task;

    await TaskRepository.saveTask(task);

    return task;
  }
}
