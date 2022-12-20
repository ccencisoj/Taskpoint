import { Request, Response } from "express";
import { GetImageDTO } from "./GetImageDTO";
import { Result } from "../../../common/Result";
import { GetImageUseCase } from "./GetImageUseCase";
import { validateId } from "../../../common/validators/validateId";
import { handleControllerError } from "../../../common/helpers/handleControllerError";
import { ValidationException } from "../../../users/exceptions/ValidationException";

export class GetImageController {
  public static execute = async (req: Request, res: Response)=> {
    try {
      const reqData = {
        imageId: req.params.id
      } as GetImageDTO;

      const validationResult = Result.combine([
        validateId(reqData.imageId)
      ])
      
      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const image = await GetImageUseCase.execute(reqData);

      console.log(image);

      res.sendFile(image.path);

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
