import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { UpdateTaskDTO } from './UpdateTaskDTO';
import { UpdateTaskUseCase } from './UpdateTaskUseCase';
import { validateId } from '../../../common/validators/validateId';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { validateTaskState } from '../../../common/validators/validateTaskState';
import { validateTaskTitle } from '../../../common/validators/validateTaskTitle';
import { ValidationException } from '../../../users/exceptions/ValidationException';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { validateTaskDescription } from '../../../common/validators/validateTaskDescription';

export class UpdateTaskController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = getSessionUser(req);

      const reqData = {
        taskId: req.params.id,
        title: req.body.title,
        description: req.body.description,
        state: req.body.state,
        owner: user.id
      } as UpdateTaskDTO;

      const validationResult = Result.combine([
        validateId(reqData.taskId),
        reqData.title ? validateTaskTitle(reqData.title) : Result.ok(),
        reqData.description ? validateTaskDescription(reqData.description) : Result.ok(),
        reqData.state ? validateTaskState(reqData.state) : Result.ok()
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      await UpdateTaskUseCase.execute(reqData);

      res.json({updated: true});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
