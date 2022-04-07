import { IPostData } from "../types/ReduxTypes";
import { IProfileWithPosts } from "../types/ReduxTypes";
export enum actionType {
  auth_login = "login",
  auth_logout = "logout",

  search_attach = "attachSearchRes",
  search_detach = "detachSearchRes",

  post_attach = "attachPosts",
  post_detach = "detachPosts",
}
export type loginAction = {
  type: string;
  payload: IProfileWithPosts;
};

export type ProfileDispatchType = {
  type: actionType.search_attach | actionType.auth_login;
  payload: IProfileWithPosts;
};
export type postsAction = {
  type: "posts";
  payload: Array<{
    title: string;
    data: Array<IPostData>;
  }>;
};

export type searchAction = loginAction;
