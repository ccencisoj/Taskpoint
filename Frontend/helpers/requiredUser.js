import { getUserFromRequest } from "./getUserFromRequest"

export const requiredUser = async ({req}) => {

  const user = await getUserFromRequest(req);

  if(user) return {props: {user}};

  return {props: {}, redirect: {destination: "/login"}}
}
