import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";
import ExperienceFormReducer from "../reducers/ExperienceFormReducer";


const rootReducer = combineReducers({
  mainReducer: MainReducer,
  experienceForm: ExperienceFormReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;


