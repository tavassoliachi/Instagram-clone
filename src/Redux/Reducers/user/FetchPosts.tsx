import { TPostActions, postsEnum } from "../../../types/ReduxTypes";

export const posts = (state = {}, action: TPostActions) => {
  switch (action.type) {
    case postsEnum.attach:
      return {
        recentPosts: action.payload,
      };
    case postsEnum.detach:
      return {
        recentPosts: {},
      };
    default:
      return state;
  }
};
