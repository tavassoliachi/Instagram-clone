import { TAuthActions, authEnum } from "../../../types/ReduxTypes";

export const addUser = (state = {}, action: TAuthActions) => {
  switch (action.type) {
    case authEnum.login:
      return {
        user: action.payload,
      };
    case authEnum.logout:
      return {
        user: {},
      };
    default:
      return state;
  }
};
