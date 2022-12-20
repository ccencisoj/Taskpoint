import { GetUsersDTO } from "./GetUsersDTO";
import { User } from "../../../common/models/User";
import { UserRepository } from "../../repositories/UserRepository";

type Response = Promise<User[]>;

export class GetUsersUseCase {
  public static execute = async (req: GetUsersDTO): Response => {

    let users: User[] = [];

    if(req.searchValue) {

      users = await UserRepository.findUsers({
        $or: [
          {username: {$regex: `.*${req.searchValue}.*`, $options: "i"}},
          {email: {$regex: `.*${req.searchValue}.*`, $options: "i"}},
        ]
      }, req.skip, req.limit);

    }else {
      users = await UserRepository.findUsers({}, req.skip, req.limit);
    }

    return users;
  }
}
