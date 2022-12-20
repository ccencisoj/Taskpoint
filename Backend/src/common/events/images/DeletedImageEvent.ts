import { Event } from "../../common/Event";
import { Image } from "../../common/models/Image";

export class DeletedImageEvent extends Event {
  public constructor(image: Image) {
    super("DeletedImageEvent", image.id);
  }
}
