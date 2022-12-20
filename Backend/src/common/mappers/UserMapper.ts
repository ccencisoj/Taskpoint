import { User } from "../models/User";

export class UserMapper {
  public static toJSON = (user: User)=> {
    return {
      id: user.id,
      image: user.image,
      email: user.email,
      username: user.username,
      createdAt: user.createdAt,
    }
  }
}
