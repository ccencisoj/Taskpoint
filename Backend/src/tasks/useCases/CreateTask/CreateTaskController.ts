import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { CreateTaskDTO } from './CreateTaskDTO';
import { CreateTaskUseCase } from './CreateTaskUseCase';
import { TaskMapper } from '../../../common/mappers/TaskMapper';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { validateTaskTitle } from '../../../common/validators/validateTaskTitle';
import { validateTaskState } from '../../../common/validators/validateTaskState';
import { ValidationException } from '../../../users/exceptions/ValidationException';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { validateTaskDescription } from '../../../common/validators/validateTaskDescription';

export class CreateTaskController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const user = getSessionUser(req);

      const reqData = {
        title: req.body.title,
        description: req.body.description,
        state: req.body.state,
        owner: user.id
      } as CreateTaskDTO;

      const validationResult = Result.combine([
        validateTaskTitle(reqData.title),
        validateTaskDescription(reqData.description),
        validateTaskState(reqData.state)
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const task = await CreateTaskUseCase.execute(reqData);

      const taskJSON = TaskMapper.toJSON(task);

      res.json({task: taskJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
