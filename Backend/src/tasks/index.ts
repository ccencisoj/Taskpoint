import { Router } from "express";
import { Event } from "../common/Event";
import { EventDispatcher } from "../common/EventDispatcher";
import { DeletedUserEvent } from "../common/events/users/DeletedUserEvent";
import { GetTasksController } from "./useCases/GetTasks/GetTasksController";
import { DeletedUserEventHandler } from "./eventHandlers/DeletedUserEventHandler";
import { UpdateTaskController } from "./useCases/UpdateTask/UpdateTaskController";
import { CreateTaskController } from "./useCases/CreateTask/CreateTaskController";
import { DeleteTaskController } from "./useCases/DeleteTask/DeleteTaskController";
import { GetTaskStatesController } from "./useCases/GetTaskStates/GetTaskStatesController";
import { GetTaskDetailsController } from "./useCases/GetTaskDetails/GetTaskDetailsController";
import { DeleteTaskStateController } from "./useCases/DeleteTaskState/DeleteTaskStateController";
import { CreateTaskStateController } from "./useCases/CreateTaskState/CreateTaskStateController";
import { UpdateTaskStateController } from "./useCases/UpdateTaskState/UpdateTaskStateController";

const router = Router();

// TaskStates
router.get("/tasks/states", GetTaskStatesController.execute);
router.post("/tasks/states", CreateTaskStateController.execute);
router.put("/tasks/states/:id", UpdateTaskStateController.execute);
router.delete("/tasks/states/:id", DeleteTaskStateController.execute);

// Tasks
router.get("/tasks/:id", GetTaskDetailsController.execute);
router.get("/tasks", GetTasksController.execute)
router.post("/tasks", CreateTaskController.execute);
router.put("/tasks:id", UpdateTaskController.execute);
router.delete("/tasks:id", DeleteTaskController.execute);

// Events
EventDispatcher.register((event: Event<any>)=> {
  if(event instanceof DeletedUserEvent) {
    DeletedUserEventHandler.handle(event);
  }
})

export default router;
