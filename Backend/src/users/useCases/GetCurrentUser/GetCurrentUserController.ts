import { Request, Response } from 'express';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { handleControllerError } from '../../../common/helpers/handleControllerError';

export class GetCurrentUserController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = getSessionUser(req);

      res.json({user: user ? user : null});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
