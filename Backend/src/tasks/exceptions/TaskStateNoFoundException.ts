import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class TaskStateNoFoundException extends ApplicationException {
  public constructor() {
    super("TaskStateNoFoundException", 400, "TaskState no found");
  }
}
