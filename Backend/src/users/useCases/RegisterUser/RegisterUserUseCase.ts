import { User } from "../../../common/models/User"
import { RegisterUserDTO } from "./RegisterUserDTO";
import { HashService } from "../../services/HashService";
import { generateId } from "../../../common/helpers/generateId";
import { UserRepository } from "../../repositories/UserRepository";
import { getCurrentDate } from "../../../common/helpers/getCurrentDate";

type Response = Promise<User>;

export class RegisterUserUseCase {
  public static execute = async (req: RegisterUserDTO): Response => {
    const userId = generateId();
    const createdAt = getCurrentDate();
    const passwordHash = HashService.hash(req.password);

    // Definimos el usuario
    const user = {
      id: userId,
      image: req.image,
      username: req.username,
      email: req.email,
      password: passwordHash,
      createdAt: createdAt,
    } as User;

    // Guardamos el usuario
    await UserRepository.saveUser(user);

    return user;
  }
}
