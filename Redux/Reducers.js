import userAdd from "./Consts";
export const addUser = (state = {}, action) => {
  switch (action.type) {
    case "login":
      return {
        user: action.payload,
      };
    case "logout":
      return {
        user: {},
      };
    default:
      return state;
  }
};
export const searchedProfile = (state = {}, action) => {
  switch (action.type) {
    case "attachSearchRes":
      return {
        searchedData: action.payload,
      };
    case "detachSearchRes":
      return {
        searchedData: {},
      };
    default:
      return state;
  }
};
export const posts = (state = {}, action) => {
  switch (action.type) {
    case "attachPosts":
      return {
        recentPosts: action.payload,
      };
    case "detachPosts":
      return {
        recentPosts: {},
      };
    default:
      return state;
  }
};
