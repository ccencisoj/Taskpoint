import { Request, Response } from 'express';
import { Result } from '../../../common/Result';
import { LoginUserDTO } from './LoginUserDTO';
import { LoginUserUseCase } from './LoginUserUseCase';
import { UserMapper } from '../../../common/mappers/UserMapper';
import { setSessionUser } from '../../../common/helpers/setSessionUser';
import { validateEmail } from '../../../common/validators/validateEmail';
import { ValidationException } from '../../exceptions/ValidationException';
import { validatePassword } from '../../../common/validators/validatePassword';
import { handleControllerError } from '../../../common/helpers/handleControllerError';

export class LoginUserController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      // Recibimos los datos que vienen de la peticion
      const reqData = {
        email: req.body.email,
        password: req.body.password
      } as LoginUserDTO;

      // Validamos los datos
      const validationResult = Result.combine([
        validateEmail(reqData.email),
        validatePassword(reqData.password)
      ])

      // Lanzamos error si los datos no son validos
      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      } 

      // Ejecutamos el caos de uso
      const user = await LoginUserUseCase.execute(reqData);

      // Convertimos el usuario del repositorio a JSON
      const userJSON = UserMapper.toJSON(user);

      // Establecemos el usuario de la session
      setSessionUser(req, userJSON);

      // Devolvemos el usuario
      res.json({user: userJSON});      

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
