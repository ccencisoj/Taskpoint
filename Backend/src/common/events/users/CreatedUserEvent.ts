import { Event } from "../../Event";
import { User } from "../../models/User";

type Data = { user: User };

export class CreatedUserEvent extends Event<Data> {
  public constructor(data: Data) {
    super("CreatedUserEvent", data);
  }
}
