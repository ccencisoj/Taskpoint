import { Request, Response } from "express";
import { Result } from "../../../common/Result";
import { UpdateTaskStateDTO } from "./UpdateTaskStateDTO";
import { validateId } from "../../../common/validators/validateId";
import { UpdateTaskStateUseCase } from "./UpdateTaskStateUseCase";
import { validateURL } from "../../../common/validators/validateURL";
import { handleControllerError } from "../../../common/helpers/handleControllerError";
import { validateTaskStateValue } from "../../../common/validators/validateTaskStateValue";
import { ValidationException } from "../../../users/exceptions/ValidationException";

export class UpdateTaskStateController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        taskStateId: req.params.id,
        image: req.body.imageURL,
        value: req.body.value
      } as UpdateTaskStateDTO;

      const validationResult = Result.combine([
        validateId(reqData.taskStateId),
        reqData.image ? validateURL(reqData.image) : Result.ok(),
        reqData.value ? validateTaskStateValue(reqData.value) : Result.ok()
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      await UpdateTaskStateUseCase.execute(reqData);

      res.json({updated: true});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
