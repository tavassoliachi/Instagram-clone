import { search, post } from "../../Consts";

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
