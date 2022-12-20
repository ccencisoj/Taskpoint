import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class UserNoFoundException extends ApplicationException {
  public constructor() {
    super("UserNoFoundException", 400, "The user no found");
  }
}
