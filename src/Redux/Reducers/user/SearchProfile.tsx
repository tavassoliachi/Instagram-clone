import { searchEnum, TSearchActions } from "../../../types/ReduxTypes";

export const searchedProfile = (state = {}, action: TSearchActions) => {
  switch (action.type) {
    case searchEnum.attach:
      return {
        searchedData: action.payload,
      };
    case searchEnum.detach:
      return {
        searchedData: {},
      };
    default:
      return state;
  }
};
