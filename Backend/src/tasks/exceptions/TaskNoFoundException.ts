import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class TaskNoFoundException extends ApplicationException {
  public constructor() {
    super("TaskNoFoundException", 400, "Task no found");
  }
}
