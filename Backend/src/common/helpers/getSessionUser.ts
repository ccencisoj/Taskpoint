// @ts-nocheck
import { Request } from "express";
import { User } from "../models/User";
import { RequiredAuthException } from "../exceptions/RequiredAuthException";

export const getSessionUser = (req: Request): Partial<User> => {

  const user = req.session.user;

  if(!user) throw new RequiredAuthException();

  return user;
}
