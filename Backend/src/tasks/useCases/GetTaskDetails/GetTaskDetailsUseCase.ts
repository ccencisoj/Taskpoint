import { Task } from "../../../common/models/Task";
import { GetTaskDetailsDTO } from "./GetTaskDetailsDTO";
import { TaskRepository } from "../../repositories/TaskRepository";
import { TaskNoFoundException } from "../../exceptions/TaskNoFoundException";

type Response = Promise<Task>;

export class GetTaskDetailsUseCase {
  public static execute = async (req: GetTaskDetailsDTO): Response => {
    const task = await TaskRepository.findTask({id: req.taskId, owner: req.owner});
    const taskFound = !!task;

    if(!taskFound) {
      throw new TaskNoFoundException();
    }
    
    return task;
  }
}
