import { Request, Response } from "express";
import { GetUsersDTO } from "./GetUsersDTO";
import { Result } from "../../../common/Result";
import { GetUsersUseCase } from "./GetUsersUseCase";
import { UserMapper } from "../../../common/mappers/UserMapper";
import { validateSkip } from "../../../common/validators/validateSkip";
import { validateLimit } from "../../../common/validators/validateLimit";
import { ValidationException } from "../../exceptions/ValidationException";
import { validateSearchValue } from "../../../common/validators/validateSearchValue";
import { handleControllerError } from "../../../common/helpers/handleControllerError";

export class GetUsersController {
  public static execute = async (req: Request, res: Response): Promise<void> => {
    try {
      const reqData = {
        skip: Number(req.query.skip),
        limit: Number(req.query.limit),
        searchValue: req.query.search
      } as GetUsersDTO;

      const validationResult = Result.combine([
        reqData.skip ? validateSkip(reqData.skip) : Result.ok(),
        reqData.limit ? validateLimit(reqData.limit) : Result.ok(),
        reqData.searchValue ? validateSearchValue(reqData.searchValue) : Result.ok()
      ])

      if(validationResult.isError) {
        throw new ValidationException(validationResult.getError() as string);
      }

      const users = await GetUsersUseCase.execute(reqData);

      const usersJSON = users.map((user)=> UserMapper.toJSON(user));

      res.json({users: usersJSON});

    }catch(error) {
      handleControllerError(req, res, error);
    }
  }
}
