import { SaveImageDTO } from "./SaveImageDTO";
import { Image } from "../../../common/models/Image"
import { generateId } from "../../../common/helpers/generateId";
import { ImageRepository } from "../../repositories/ImageRepository";
import { getCurrentDate } from "../../../common/helpers/getCurrentDate";

type Response = Promise<Image>;

export class SaveImageUseCase {
  public static execute = async (req: SaveImageDTO): Response => {
   
    const imageId = generateId();
    const createdAt = getCurrentDate();

    const image = {
      id: imageId,
      path: req.path,
      extension: req.extension,
      createdAt: createdAt 
    } as Image;

    await ImageRepository.saveImage(image);

    return image;
  }
}
