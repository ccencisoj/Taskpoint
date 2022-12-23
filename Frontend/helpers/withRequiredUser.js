import { requiredUser } from "./requiredUser"

export const withRequiredUser = (callback)=> {
  return async (ctx)=> {
    const result = await requiredUser(ctx);

    if(result.redirect) return result;

    return callback(ctx);
  }
}
