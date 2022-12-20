import { Request, Response } from "express";
import { Result } from "../../../common/Result";
import { GetTaskStatesDTO } from "./GetTaskStatesDTO";
import { GetTaskStatesUseCase } from "./GetTaskStatesUseCase";
import { validateSkip } from "../../../common/validators/validateSkip";
import { validateLimit } from "../../../common/validators/validateLimit";
import { TaskStateMapper } from "../../../common/mappers/TaskStateMapper";
import { handleControllerError } from "../../../common/helpers/handleControllerError";
import { validateSearchValue } from "../../../common/validators/validateSearchValue";
import { ValidationException } from "../../../users/exceptions/ValidationException";

export class GetTaskStatesController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        skip: Number(req.query.skip),
        limit: Number(req.query.limit),
        searchValue: req.query.search
      } as GetTaskStatesDTO;

      const validationResult = Result.combine([
        reqData.skip ? validateSkip(reqData.skip) : Result.ok(),
        reqData.limit ? validateLimit(reqData.limit) : Result.ok(),
        reqData.searchValue ? validateSearchValue(reqData.searchValue) : Result.ok()
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const taskStates = await GetTaskStatesUseCase.execute(reqData);

      const taskStatesJSON = taskStates.map((taskState)=> TaskStateMapper.toJSON(taskState));

      res.json({states: taskStatesJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
