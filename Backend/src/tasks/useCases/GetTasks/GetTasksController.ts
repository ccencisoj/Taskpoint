import { Request, Response } from 'express';
import { GetTasksDTO } from './GetTasksDTO';
import { Result } from '../../../common/Result';
import { GetTasksUseCase } from './GetTasksUseCase';
import { TaskMapper } from '../../../common/mappers/TaskMapper';
import { validateSkip } from '../../../common/validators/validateSkip';
import { getSessionUser } from '../../../common/helpers/getSessionUser';
import { validateLimit } from '../../../common/validators/validateLimit';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { validateSearchValue } from '../../../common/validators/validateSearchValue';
import { ValidationException } from '../../../users/exceptions/ValidationException';

export class GetTasksController {
  public static execute = async (req: Request, res: Response)=> {
    try {
      const user = getSessionUser(req);

      const reqData = {
        skip: Number(req.query.skip),
        limit: Number(req.query.limit),
        searchValue: req.query.search,
        owner: user.id
      } as GetTasksDTO;

      const validationResult = Result.combine([
        reqData.skip ? validateSkip(reqData.skip) : Result.ok(),
        reqData.limit ? validateLimit(reqData.limit) : Result.ok(),
        reqData.searchValue ? validateSearchValue(reqData.searchValue) : Result.ok()
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const tasks = await GetTasksUseCase.execute(reqData);

      const tasksJSON = tasks.map((task)=> TaskMapper.toJSON(task));

      res.json({tasks: tasksJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
