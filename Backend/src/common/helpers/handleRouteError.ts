import { Request, Response } from 'express';
import { ApplicationException } from '../exceptions/ApplicationException';

export const handleRouteError = (req: Request, res: Response, error: any)=> {
  if(error instanceof ApplicationException) {
    return res.status(error.code).json({message: error.message});
  }
  console.log("\n####################################");
  console.log("##### Occurred a unknown error #####");
  console.log("####################################\n");
  console.log(error);
  return res.status(500).json({message: "Occurred a unknown error"});
}
