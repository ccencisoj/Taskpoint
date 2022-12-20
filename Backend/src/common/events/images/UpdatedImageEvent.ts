import { Event } from "../../common/Event";
import { Image } from "../../common/models/Image";

export class UpdatedImageEvent extends Event {
  public constructor(image: Image) {
    super("UpdatedImageEvent", image.id);
  }
}
