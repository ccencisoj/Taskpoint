import { TaskRepository } from "../repositories/TaskRepository";
import { DeletedUserEvent } from "../../common/events/users/DeletedUserEvent";

export class DeletedUserEventHandler {
  public static handle = async (event: DeletedUserEvent)=> {

    const user = event.data.user;

    await TaskRepository.deleteTasks({owner: user.id});
  }
}
