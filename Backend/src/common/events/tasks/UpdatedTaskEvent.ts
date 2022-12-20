import { Event } from "../../common/Event";
import { Task } from "../../common/models/Task";

export class UpdatedTaskEvent extends Event {
  public constructor(task: Task) {
    super("UpdatedTaskEvent", task.id);
  }
}
