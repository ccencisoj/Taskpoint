import { Router } from "express";
import { GetUsersController } from "./useCases/GetUsers/GetUsersController";
import { DeleteUserController } from "./useCases/DeleteUser/DeleteUserController";
import { LoginUserController } from "./useCases/LoginUser/LoginUserController";
import { RegisterUserController } from "./useCases/RegisterUser/RegisterUserController";
import { GetCurrentUserController } from './useCases/GetCurrentUser/GetCurrentUserController';

const router = Router();

router.get("/users", GetUsersController.execute);
router.post("/users/login", LoginUserController.execute);
router.post("/users/register", RegisterUserController.execute);
router.get("/users/current", GetCurrentUserController.execute);
router.delete("/users/:id", DeleteUserController.execute);

export default router;
