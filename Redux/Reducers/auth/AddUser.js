import { auth } from "../../Consts";
export const addUser = (state = {}, action) => {
  switch (action.type) {
    case auth.login:
      return {
        user: action.payload,
      };
    case auth.logout:
      return {
        user: {},
      };
    default:
      return state;
  }
};
