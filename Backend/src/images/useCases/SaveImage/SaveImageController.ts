import { Request, Response } from "express";
import { SaveImageDTO } from "./SaveImageDTO";
import { SaveImageUseCase } from "./SaveImageUseCase";
import { ImageMapper } from "../../../common/mappers/ImageMapper";
import { getImageFromRequest } from "../../../common/helpers/getImageFromRequest";
import { handleControllerError } from "../../../common/helpers/handleControllerError";

export class SaveImageController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {

      const reqImage = await getImageFromRequest(req);

      const reqData = {
        path: reqImage.path,
        extension: reqImage.extension
      } as SaveImageDTO;

      const image = await SaveImageUseCase.execute(reqData);

      const imageJSON = ImageMapper.toJSON(image);

      res.json({image: imageJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }   
  }
}
