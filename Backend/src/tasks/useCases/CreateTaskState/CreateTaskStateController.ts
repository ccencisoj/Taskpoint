import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { CreateTaskStateDTO } from './CreateTaskStateDTO';
import { CreateTaskStateUseCase } from './CreateTaskStateUseCase';
import { validateURL } from '../../../common/validators/validateURL';
import { TaskStateMapper } from '../../../common/mappers/TaskStateMapper';
import { ValidationException } from '../../../users/exceptions/ValidationException';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { validateTaskStateValue } from '../../../common/validators/validateTaskStateValue';
import { validateTaskStateLabel } from '../../../common/validators/validateTaskStateLabel';

export class CreateTaskStateController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        image: req.body.image,
        value: req.body.value
      } as CreateTaskStateDTO;

      const validationResult = Result.combine([
        validateURL(reqData.image),
        validateTaskStateValue(reqData.value)
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const taskState = await CreateTaskStateUseCase.execute(reqData);

      const taskStateJSON = TaskStateMapper.toJSON(taskState);

      res.json({taskState: taskStateJSON})

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
