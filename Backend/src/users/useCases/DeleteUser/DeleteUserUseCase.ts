import { DeleteUserDTO } from "./DeleteUserDTO";
import { EventDispatcher } from "../../../common/EventDispatcher";
import { UserRepository } from "../../repositories/UserRepository";
import { UserNoFoundException } from "../../exceptions/UserNoFoundException";
import { DeletedUserEvent } from "../../../common/events/users/DeletedUserEvent";

type Response = Promise<void>;

export class DeleteUserUseCase {
  public static execute = async (req: DeleteUserDTO): Response => {
    const user = await UserRepository.findUser({id: req.userId});
    const userFound = !!user;

    if(!userFound) {
      throw new UserNoFoundException();
    }

    await UserRepository.deleteUser(user);

    const deletedUserEvent = new DeletedUserEvent({user});

    EventDispatcher.dispatch(deletedUserEvent);
  }
}
