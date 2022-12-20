import { Event } from "../../Event";
import { User } from "../../models/User";

type Data = { user: User };

export class DeletedUserEvent extends Event<Data> {
  public constructor(data: Data) {
    super("DeletedUserEvent", data);
  }
}
