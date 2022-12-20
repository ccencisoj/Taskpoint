import { ApplicationException } from "../../common/exceptions/ApplicationException";

export class ImageNoFoundException extends ApplicationException {
  constructor() {
    super("ImageNoFoundException", 400, "Image no found");
  }
}
