import { DeleteTaskStateDTO } from "./DeleteTaskStateDTO";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";
import { TaskStateNoFoundException } from "../../exceptions/TaskStateNoFoundException";

type Response = Promise<void>;

export class DeleteTaskStateUseCase {
  public static execute = async (req: DeleteTaskStateDTO): Response => {
    const taskState = await TaskStateRepository.findTaskState({id: req.taskStateId});
    const taskStateFound = !!taskState;

    if(!taskStateFound) {
      throw new TaskStateNoFoundException();
    }

    await TaskStateRepository.deleteTaskState(taskState);
  }
}
