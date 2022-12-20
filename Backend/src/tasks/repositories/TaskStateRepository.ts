import { model, Schema } from 'mongoose';
import { TaskState } from '../../common/models/TaskState';

const TaskStateSchema = new Schema<TaskState>({
  id: {type: String, required: true},
  image: {type: String, required: true},
  value: {type: String, required: true},
  createdAt: {type: String, required: true},
  isDeleted: {type: Boolean, required: true}
})

const TaskStateModel = model("TaskState", TaskStateSchema);

export class TaskStateRepository {
  public static saveTaskState = async (taskState: TaskState): Promise<void> => {
    const taskStateExists = !!(await this.findTaskState({id: taskState.id}));

    if(taskStateExists) {
      await TaskStateModel.updateOne({id: taskState.id}, taskState);
    }else {
      await TaskStateModel.create({...taskState, isDeleted: false});
    }
  }

  public static deleteTaskState = async (taskState: TaskState): Promise<void> => {
    await TaskStateModel.updateOne({id: taskState.id}, {isDeleted: true});
  }

  public static findTaskState = async (filter: any): Promise<TaskState> => {
    const taskState = await TaskStateModel.findOne({...filter, isDeleted: false});
    return taskState;
  }

  public static findTaskStates = async (filter: any, skip?: number, limit?: number): Promise<TaskState[]> => {
    const users = await TaskStateModel.find({...filter, isDeleted: false}).skip(skip).limit(limit);
    return users;
  }
}
