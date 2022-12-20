import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { DeleteTaskDTO } from './DeleteTaskDTO';
import { DeleteTaskUseCase } from './DeleteTaskUseCase';
import { validateId } from '../../../common/validators/validateId';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { ValidationException } from '../../../users/exceptions/ValidationException';
import { handleControllerError } from '../../../common/helpers/handleControllerError';

export class DeleteTaskController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = getSessionUser(req);

      const reqData = {
        taskId: req.params.id,
        owner: user.id
      } as DeleteTaskDTO;

      const validationResult = Result.combine([
        validateId(reqData.taskId)
      ])  

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      await DeleteTaskUseCase.execute(reqData);

      res.json({deleted: true});
      
    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
