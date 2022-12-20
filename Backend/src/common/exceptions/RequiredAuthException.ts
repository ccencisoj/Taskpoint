import { ApplicationException } from "./ApplicationException";

export class RequiredAuthException extends ApplicationException {
  public constructor() {
    super("RequiredAuthException", 400, "Required user exception");
  }
}
