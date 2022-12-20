import { agent } from "../agent";

export const getUserFromRequest = async (req)=> {

  const cookie = req.headers.cookie;

  try {
    const user = await agent.User.current(cookie);

    return user;

  }catch(error) {
    
    return null;
  }
}
