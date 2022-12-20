import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class InvalidUserCredentialsException extends ApplicationException {
  public constructor() {
    super("InvalidUserCredentialsException", 400, "The user credentials aren´t valid");
  }
}
