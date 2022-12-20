import { GetTasksDTO } from "./GetTasksDTO";
import { Task } from "../../../common/models/Task";
import { TaskRepository } from "../../repositories/TaskRepository";

type Response = Promise<Task[]>;

export class GetTasksUseCase {
  public static execute = async (req: GetTasksDTO): Response => {

    let tasks: Task[] = [];

    if(req.searchValue) {

      tasks = await TaskRepository.findTasks({
        owner: req.owner,
        $or: [
          {title: {$regex: `.*${req.searchValue}.*`, $options: "i"}},
          {description: {$regex: `.*${req.searchValue}.*`, $options: "i"}},
        ]
      }, req.skip, req.limit);

    }else {
      tasks = await TaskRepository.findTasks({owner: req.owner}, req.skip, req.limit);
    }

    return tasks;
  }
}
