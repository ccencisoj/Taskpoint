import { model, Schema } from 'mongoose';
import { Image } from '../../common/models/Image';

const ImageSchema = new Schema<Image>({
  id: {type: String, required: true},
  path: {type: String, required: true},
  extension: {type: String, required: true},
  createdAt: {type: String, required: true},
  isDeleted: {type: Boolean, required: true}
})

const ImageModel = model("Image", ImageSchema);

export class ImageRepository {
  public static saveImage = async (image: Image): Promise<void> => {
    const imageExists = !!(await this.findImage({id: image.id, isDeleted: false}));

    if(imageExists) {
      await ImageModel.updateOne({id: image.id}, image);
    }else {
      await ImageModel.create({...image, isDeleted: false});
    }
  }

  public static deleteImage = async (image: Image): Promise<void> => {
    await ImageModel.updateOne({id: image.id}, {isDeleted: true});
  }

  public static findImage = async (filter: any): Promise<Image> => {
    const image = ImageModel.findOne(filter);
    return image;
  }

  public static findImages = async (filter: any, skip?: number, limit?: number): Promise<Image[]> => {
    const users = await ImageModel.find({...filter, isDeleted: false}).skip(skip).limit(limit);
    return users;
  }
}
