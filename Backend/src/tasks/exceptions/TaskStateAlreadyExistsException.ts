import { TaskState } from "../../common/models/TaskState";
import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class TaskStateAlreadyExistsException extends ApplicationException {
  public constructor(taskState: TaskState) {
    super("TaskStateAlreadyExistsException", 400, `The state value '${taskState.value}' already exists`);
  }
}
