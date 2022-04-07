import { IPostData } from "./ReduxTypes";
// -------------- NAVIGATIONS -------------- //

export type AuthStackProps = {
  Auth: undefined;
  LogIn: undefined;
  Register: undefined;
};
export type LoggedInStackProps = {
  tabScreen: undefined;
  commentScreen: {
    data: IPostData;
  };
  messenger: undefined;
};
export type MainStackProps = {
  Loading: undefined;
  Main: undefined;
  AuthMain: undefined;
};
export type MessengerStackProps = {
  messageListScreen: undefined;
  message: {
    data: {
      members: Array<string>;
      id: string;
    };
    target: {
      uid: string;
      username: string;
    };
  };
};
export type SearchStackProps = {
  searchMain: undefined;
  searchProfile: {
    search: boolean;
    uid: string;
  };
};
export type TabNavigationsProps = {
  home: undefined;
  search: undefined;
  newPost: undefined;
  activity: undefined;
  profile: undefined;
};
