import { combineReducers, configureStore } from "@reduxjs/toolkit";
import MainReducer from "../reducers/MainReducer";
import ExperienceFormReducer from "../reducers/ExperienceFormReducer";
import asideProfilesReducer from "../reducers/AsideProfilesReducer";


const rootReducer = combineReducers({
  mainReducer: MainReducer,
  experienceForm: ExperienceFormReducer,
  asideProfiles: asideProfilesReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;


