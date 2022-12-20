import { config } from "../config";
import { Image } from "../models/Image";

export class ImageMapper {
  public static toJSON = (image: Image)=> {
    return {
      id: image.id,
      extension: image.extension,
      createdAt: image.createdAt,
      url: `${config.IMAGES_SERVICE_BASE_URI}/${image.id}`
    }
  }
}
