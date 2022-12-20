import { CreateTaskStateDTO } from "./CreateTaskStateDTO";
import { TaskState } from "../../../common/models/TaskState";
import { generateId } from "../../../common/helpers/generateId";
import { getCurrentDate } from "../../../common/helpers/getCurrentDate";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";
import { TaskStateAlreadyExistsException } from "../../exceptions/TaskStateAlreadyExistsException";

type Response = Promise<TaskState>;

export class CreateTaskStateUseCase {
  public static execute = async (req: CreateTaskStateDTO): Response => {
    const taskState = await TaskStateRepository.findTaskState({value: req.value});
    const taskStateFound = !!taskState;

    if(taskStateFound) {
      throw new TaskStateAlreadyExistsException(taskState);
    }

    const taskStateId = generateId();
    const createdAt = getCurrentDate();

    const newTaskState = {
      id: taskStateId,
      image: req.image,
      value: req.value,
      createdAt: createdAt
    } as TaskState;

    await TaskStateRepository.saveTaskState(newTaskState);

    return newTaskState;
  }
}
