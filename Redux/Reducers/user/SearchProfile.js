import { search } from "../../Consts";

export const searchedProfile = (state = {}, action) => {
  switch (action.type) {
    case search.attach:
      return {
        searchedData: action.payload,
      };
    case search.detach:
      return {
        searchedData: {},
      };
    default:
      return state;
  }
};
