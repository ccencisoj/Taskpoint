import { Request, Response } from "express";
import { Result } from "../../../common/Result";
import { DeleteTaskStateDTO } from "./DeleteTaskStateDTO";
import { validateId } from "../../../common/validators/validateId";
import { DeleteTaskStateUseCase } from "./DeleteTaskStateUseCase";
import { handleControllerError } from "../../../common/helpers/handleControllerError";
import { ValidationException } from "../../../users/exceptions/ValidationException";

export class DeleteTaskStateController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        taskStateId: req.params.id
      } as DeleteTaskStateDTO;

      const validationResult = Result.combine([
        validateId(reqData.taskStateId)
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      await DeleteTaskStateUseCase.execute(reqData);

      res.json({deleted: true});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
