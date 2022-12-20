import { Router } from "express";
import { GetImageController } from "./useCases/GetImage/GetImageController";
import { SaveImageController } from "./useCases/SaveImage/SaveImageController";

const router = Router();

router.post("/images", SaveImageController.execute);
router.get("/images/:id", GetImageController.execute);

export default router;
