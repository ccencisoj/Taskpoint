import { Request, Response } from "express";
import { setSessionUser } from "../../../common/helpers/setSessionUser";
import { handleControllerError } from "../../../common/helpers/handleControllerError"

export class LogoutUserController {
  public static execute = async (req: Request, res: Response)=> {
    try {
      
      setSessionUser(req, null);

      res.json({logout: true});
      
    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
