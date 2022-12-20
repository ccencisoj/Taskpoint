import { UpdateTaskStateDTO } from "./UpdateTaskStateDTO";
import { TaskState } from "../../../common/models/TaskState";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";
import { TaskStateNoFoundException } from "../../exceptions/TaskStateNoFoundException";
import { TaskStateAlreadyExistsException } from "../../exceptions/TaskStateAlreadyExistsException";

type Response = Promise<void>;

export class UpdateTaskStateUseCase {
  public static execute = async (req: UpdateTaskStateDTO): Response => {
    const taskState = await TaskStateRepository.findTaskState({id: req.taskStateId});
    const taskStateFound = !!taskState;

    if(!taskStateFound) {
      throw new TaskStateNoFoundException();
    }

    const taskStateByValue = await TaskStateRepository.findTaskState({value: req.value});
    const taskStateByValueFound = !!taskStateByValue;

    if(taskStateByValueFound) {
      throw new TaskStateAlreadyExistsException(taskStateByValue);
    }

    const updatedTaskState = {
      id: taskState.id,
      image: req.image || taskState.image,
      value: req.value || taskState.value,
      createdAt: taskState.createdAt
    } as TaskState;

    await TaskStateRepository.saveTaskState(updatedTaskState);    
  }
}
