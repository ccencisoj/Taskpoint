import { DeleteTaskDTO } from "./DeleteTaskDTO";
import { TaskRepository } from "../../repositories/TaskRepository";
import { TaskNoFoundException } from "../../exceptions/TaskNoFoundException";

type Response = Promise<void>;

export class DeleteTaskUseCase {
  public static execute = async (req: DeleteTaskDTO): Response => {
    const task = await TaskRepository.findTask({id: req.taskId, owner: req.owner});
    const taskFound = !!task;
  
    if(!taskFound) {
      throw new TaskNoFoundException();
    }

    await TaskRepository.deleteTask(task);
  }
}
