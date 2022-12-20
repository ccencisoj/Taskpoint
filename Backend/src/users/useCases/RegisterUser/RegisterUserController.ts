import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { RegisterUserUseCase } from './RegisterUserUseCase';
import { UserMapper } from '../../../common/mappers/UserMapper';
import { validateEmail } from '../../../common/validators/validateEmail';
import { ValidationException } from '../../exceptions/ValidationException';
import { validatePassword } from '../../../common/validators/validatePassword';
import { validateUsername } from '../../../common/validators/validateUsername';
import { handleControllerError } from '../../../common/helpers/handleControllerError';
import { RegisterUserDTO } from './RegisterUserDTO';
import { validateURL } from '../../../common/validators/validateURL';

export class RegisterUserController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      // Recibimos los datos de la peticion
      const reqData = {
        image: req.body.image,
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
      } as RegisterUserDTO;

      // Validamos los datos
      const validationResult = Result.combine([
        validateURL(reqData.image),
        validateUsername(reqData.username),
        validateEmail(reqData.email),
        validatePassword(reqData.password)
      ])

      // Lanzamos error si alguno de los datos no es valido
      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const user = await RegisterUserUseCase.execute(reqData);

      const userJSON = UserMapper.toJSON(user);

      // Retornamos el usuario
      res.json({user: userJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
