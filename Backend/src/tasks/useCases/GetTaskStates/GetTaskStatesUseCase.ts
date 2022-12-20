import { GetTaskStatesDTO } from "./GetTaskStatesDTO";
import { TaskState } from "../../../common/models/TaskState";
import { TaskStateRepository } from "../../repositories/TaskStateRepository";

type Response = Promise<TaskState[]>;

export class GetTaskStatesUseCase {
  public static execute = async (req: GetTaskStatesDTO): Response => {

    let taskStates: TaskState[] = [];

    if(req.searchValue) {

      taskStates = await TaskStateRepository.findTaskStates({
        $or: [
          {value: {$regex: `.*${req.searchValue}.*`, $options: "i"}},
        ]
      }, req.skip, req.limit);

    }else {
      taskStates = await TaskStateRepository.findTaskStates({}, req.skip, req.limit);
    }

    return taskStates;
  }
}
