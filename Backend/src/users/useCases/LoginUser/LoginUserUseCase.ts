import { LoginUserDTO } from './LoginUserDTO';
import { User } from '../../../common/models/User';
import { HashService } from '../../services/HashService';
import { UserRepository } from '../../repositories/UserRepository';
import { UserNoFoundException } from '../../exceptions/UserNoFoundException';
import { InvalidUserCredentialsException } from '../../exceptions/InvalidUserCredentialsException';

type Response = Promise<User>;

export class LoginUserUseCase {
  public static execute = async (req: LoginUserDTO): Response => {
    // Buscamos el usuario que coincide con el correo
    const user = await UserRepository.findUser({email: req.email});
    const userFound = !!user;

    // Lanzamos error si no encuentra un usuario con el correo
    if(!userFound) {
      throw new UserNoFoundException();
    }

    // Verificamos que la contraseña coincida
    const isValidPassword = HashService.compare(req.password, user.password);

    // Lanzamos error si la contraseña no coicide
    if(!isValidPassword) {
      throw new InvalidUserCredentialsException();
    }

    return user;
  }
}
