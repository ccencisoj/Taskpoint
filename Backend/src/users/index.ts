import { Router } from "express";
import { GetUsersController } from "./useCases/GetUsers/GetUsersController";
import { LoginUserController } from "./useCases/LoginUser/LoginUserController";
import { DeleteUserController } from "./useCases/DeleteUser/DeleteUserController";
import { LogoutUserController } from "./useCases/LogoutUser/LogoutUserController";
import { RegisterUserController } from "./useCases/RegisterUser/RegisterUserController";
import { GetCurrentUserController } from './useCases/GetCurrentUser/GetCurrentUserController';

const router = Router();

router.get("/users", GetUsersController.execute);
router.post("/users/login", LoginUserController.execute);
router.post("/users/logout", LogoutUserController.execute);
router.post("/users/register", RegisterUserController.execute);
router.get("/users/current", GetCurrentUserController.execute);
router.delete("/users/:id", DeleteUserController.execute);

export default router;
