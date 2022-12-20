import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { GetTaskDetailsDTO } from './GetTaskDetailsDTO';
import { TaskMapper } from '../../../common/mappers/TaskMapper';
import { GetTaskDetailsUseCase } from './GetTaskDetailsUseCase';
import { validateId } from '../../../common/validators/validateId';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { ValidationException } from '../../../users/exceptions/ValidationException';

export class GetTaskDetailsController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = getSessionUser(req);

      const reqData = {
        taskId: req.params.id,
        owner: user.id
      } as GetTaskDetailsDTO;

      const validationResult = Result.combine([
        validateId(reqData.taskId)
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const task = await GetTaskDetailsUseCase.execute(reqData);

      const taskJSON = TaskMapper.toJSON(task);

      res.json({task: taskJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
