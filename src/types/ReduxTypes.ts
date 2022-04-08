import { Dispatch } from "react";

// ----- Action Type Enums --------//
export enum authEnum {
  login = "login",
  logout = "logout",
}
export enum searchEnum {
  attach = "attachSearchRes",
  detach = "detachSearchRes",
}
export enum postsEnum {
  attach = "attachPosts",
  detach = "detachPosts",
}
//------ Actions ----//

//---Auth---//
export type TAuthActions = IAuthAttach | IAuthDetach;

export interface IAuthAttach {
  type: authEnum.login;
  payload: IProfileWithPosts;
}
export interface IAuthDetach {
  type: authEnum.logout;
}
//--Search---//
export type TSearchActions = ISearchAttach | ISearchDetach;

export interface ISearchAttach {
  type: searchEnum.attach;
  payload: IProfileWithPosts;
}
export interface ISearchDetach {
  type: searchEnum.detach;
}
//--Post---//
export type TPostActions = IPostAttach | IPostDetach;

export interface IPostAttach {
  type: postsEnum.attach;
  payload: IPostObject[];
}
export interface IPostDetach {
  type: postsEnum.detach;
}
//----Type of actions without payloads--//
type TDetachAction = IAuthDetach | ISearchDetach | IPostDetach;

// ---All Dispatch Types --//
type TAllActions = IAuthAttach | ISearchAttach | IPostAttach | TDetachAction;

//----Dispatch Params---//
export type DispatchType = Dispatch<TAllActions>;

// ------- Data Types -------//
export interface IUserInfo {
  username: string;
  uid: string;
}
export interface IPostData extends IProfile {
  name: string;
  likes: Array<string>;
  createDate: number;
  text: string;
  comments: Array<IComment>;
  img: string;
}
export interface IComment extends IUserInfo {
  likes: Array<string>;
  createDate: number;
  text: string;
  // replies: any[];
}
export interface ISearchResult extends IProfile {
  searchQuery: string[];
}
export interface IPostObject {
  title: string;
  data: IPostData[];
}
export interface IProfileWithPosts extends IProfile {
  posts: IPostObject[];
}
export interface IProfile extends IUserInfo {
  avatar?: string;
  following: Array<IUserInfo>;
  followers: Array<IUserInfo>;
}
interface IAuthRedux {
  addUser: {
    user: IProfileWithPosts;
  };
}
interface ISearchRedux {
  searchedProfile: {
    searchedData: IProfileWithPosts;
  };
}
interface IPostsRedux {
  posts: {
    recentPosts: IPostObject[];
  };
}
export type TRedux = IAuthRedux & ISearchRedux & IPostsRedux;
