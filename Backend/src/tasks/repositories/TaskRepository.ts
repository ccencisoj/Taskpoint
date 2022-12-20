import { model, Schema } from 'mongoose';
import { Task } from '../../common/models/Task';

const TaskSchema = new Schema<Task>({
  id: {type: String, required: true},
  title: {type: String, required: true},
  description: {type: String, required: true},
  state: {type: String, required: true},
  owner: {type: String, required: true},
  createdAt: {type: String, required: true},
  isDeleted: {type: Boolean, required: true}
})

const TaskModel = model("Task", TaskSchema);

export class TaskRepository {
  public static saveTask = async (task: Task): Promise<void> => {
    const taskExists = !!(await this.findTask({id: task.id, isDeleted: false}));

    if(taskExists) {
      await TaskModel.updateOne({id: task.id}, task);
    }else {
      await TaskModel.create({...task, isDeleted: false});
    }
  }

  public static deleteTask = async (task: Task): Promise<void> => {
    await TaskModel.updateOne({id: task.id}, {isDeleted: true});
  }

  public static deleteTasks = async (filter: any)=> {
    await TaskModel.updateMany(filter, {isDeleted: true});
  }

  public static findTask = async (filter: any): Promise<Task> => {
    const task = await TaskModel.findOne({...filter, isDeleted: false});
    return task;
  }

  public static findTasks = async (filter: any, skip?: number, limit?: number): Promise<Task[]> => {
    const users = await TaskModel.find({...filter, isDeleted: false}).skip(skip).limit(limit);
    return users;
  }
}
