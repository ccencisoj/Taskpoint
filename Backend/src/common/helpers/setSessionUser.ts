//@ts-nocheck
import { Request } from 'express';
import { User } from '../models/User';

export const setSessionUser = (req: Request, user: Partial<User>): void=> {

  req.session.user = user;

}
