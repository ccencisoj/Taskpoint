import { Event } from "../../Event";
import { Task } from "../../models/Task";

export class CreatedTaskEvent extends Event {
  public constructor(task: Task) {
    super("CreatedTaskEvent", task.id);
  }
}
