import { Event } from "../../Event";
import { Image } from "../../models/Image";

export class CreatedImageEvent extends Event {
  public constructor(image: Image) {
    super("CreatedImageEvent", image.id);
  }
}
