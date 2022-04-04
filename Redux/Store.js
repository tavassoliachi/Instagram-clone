import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addUser } from "./Reducers/auth/AddUser";
import { searchedProfile } from "./Reducers/user/SearchProfile";
import { posts } from "./Reducers/user/FetchPosts";
const reducers = combineReducers({ addUser, searchedProfile, posts });
const middleware = applyMiddleware(thunk);
export const store = createStore(reducers, composeWithDevTools(middleware));
