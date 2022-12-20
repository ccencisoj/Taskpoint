import { GetImageDTO } from "./GetImageDTO";
import { Image } from "../../../common/models/Image";
import { ImageRepository } from "../../repositories/ImageRepository";
import { ImageNoFoundException } from "../../exceptions/ImageNoFoundException";

type Response = Promise<Image>;

export class GetImageUseCase {
  public static execute = async (req: GetImageDTO): Response => {
    const image = await ImageRepository.findImage({id: req.imageId});
    const imageFound = !!image;

    if(!imageFound) {
      throw new ImageNoFoundException();
    }

    return image;
  }
}
