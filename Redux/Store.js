import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addUser, searchedProfile, posts } from "./Reducers";
const reducers = combineReducers({ addUser, searchedProfile, posts });
const middleware = applyMiddleware(thunk);
export const store = createStore(reducers, composeWithDevTools(middleware));
