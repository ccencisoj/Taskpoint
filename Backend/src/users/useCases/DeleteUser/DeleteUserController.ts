import { Request, Response } from "express"
import { DeleteUserDTO } from "./DeleteUserDTO";
import { Result } from "../../../common/Result";
import { DeleteUserUseCase } from "./DeleteUserUseCase";
import { validateId } from "../../../common/validators/validateId";
import { handleControllerError } from "../../../common/helpers/handleControllerError"
import { ValidationException } from "../../exceptions/ValidationException";

export class DeleteUserController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        userId: req.params.id
      } as DeleteUserDTO;

      const validationResult = Result.combine([
        validateId(reqData.userId)
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      await DeleteUserUseCase.execute(reqData);

      res.json({deleted: true});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
