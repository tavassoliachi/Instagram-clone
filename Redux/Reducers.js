import { auth, post, search } from "./Consts";
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
export const posts = (state = {}, action) => {
  switch (action.type) {
    case post.attach:
      return {
        recentPosts: action.payload,
      };
    case post.detach:
      return {
        recentPosts: {},
      };
    default:
      return state;
  }
};
