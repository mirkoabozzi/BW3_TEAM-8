import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";

const rootReducer = combineReducers({
  mainReducer: MainReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
