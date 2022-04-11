import thunk from "redux-thunk";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { addUser } from "./Reducers/auth/AddUser";
import { searchedProfile } from "./Reducers/user/SearchProfile";
import { persistStore, persistReducer } from "redux-persist";
import createFilter from "redux-persist-transform-filter";
import AsyncStorage from "@react-native-async-storage/async-storage";
import config from "../config";
import { posts } from "./Reducers/user/FetchPosts";

const reducers = combineReducers({ addUser, searchedProfile, posts });
const middleware = applyMiddleware(thunk);

const persistProperties = createFilter("addUser", [
  "user.username",
  "user.uid",
]);

const persistConfig = {
  key: config.persistKEY,
  storage: AsyncStorage,
  whitelist: ["addUser"],
  transforms: [persistProperties],
};
const persistedReducer = persistReducer(persistConfig, reducers);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(middleware)
);
export const persistor = persistStore(store);
