import { Event } from "../../common/Event";
import { Task } from "../../common/models/Task";

export class DeletedTaskEvent extends Event {
  public constructor(task: Task) {
    super("DeletedTaskEvent", task.id);
  }
}
