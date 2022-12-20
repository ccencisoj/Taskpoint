import { model, Schema } from 'mongoose';
import { User } from '../../common/models/User';

const UserSchema = new Schema<User>({
  id: {type: String, required: true},
  image: {type: String, required: true},
  username: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  createdAt: {type: String, required: true},
  isDeleted: {type: Boolean, required: true}
})

const UserModel = model("User", UserSchema);

export class UserRepository {
  public static saveUser = async (user: User): Promise<void> => {
    const userExists = !!(await this.findUser({id: user.id, isDeleted: false}));

    if(userExists) {
      await UserModel.updateOne({id: user.id}, user);
    }else {
      await UserModel.create({...user, isDeleted: false});
    }
  }

  public static deleteUser = async (user: User): Promise<void> => {
    await UserModel.updateOne({id: user.id}, {isDeleted: true});
  }

  public static findUser = async (filter: any): Promise<User> => {
    const user = await UserModel.findOne({...filter, isDeleted: false});
    return user;
  }

  public static findUsers = async (filter: any, skip?: number, limit?: number): Promise<User[]> => {
    const users = await UserModel.find({...filter, isDeleted: false}).skip(skip).limit(limit);
    return users;
  }
}
