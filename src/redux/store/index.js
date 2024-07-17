import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";
import HomeReducer from "../reducers/HomeReducer";

const rootReducer = combineReducers({
  mainReducer: MainReducer,
  homeReducer: HomeReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
