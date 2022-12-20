import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class InvalidTaskStateException extends ApplicationException {
  public constructor() {
    super("InvalidTaskStateException", 400, "The taks state is invalid");
  }
}
