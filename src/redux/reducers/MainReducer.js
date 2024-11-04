import { SET_USER, SET_PROFILES, SET_SELECTED_USER, SET_EXPERIENCES, SEARCH_JOBS_REQUEST, SEARCH_JOBS_SUCCESS, SEARCH_JOBS_FAILURE, SET_SELECTED_JOB } from "../actions";

const initialState = {
  user: {
    _id: "",
    name: "",
    surname: "",
    email: "",
    username: "",
    title: "",
    bio: "",
    area: "",
    image: "",
    createdAt: "",
    updatedAt: "",
  },
  profiles: [],
  selectedUser: null,
  experiences: [],
  selectedJob: null,
  jobs: [],
  token: "",
};

const MainReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case SET_PROFILES:
      return {
        ...state,
        profiles: action.payload,
      };
    case SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case SET_EXPERIENCES:
      return {
        ...state,
        experiences: action.payload,
      };
    case SEARCH_JOBS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case SEARCH_JOBS_SUCCESS:
      return {
        ...state,
        loading: false,
        jobs: action.payload,
      };
    case SEARCH_JOBS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case SET_SELECTED_JOB:
      return {
        ...state,
        selectedJob: action.payload,
      };
    default:
      return state;
  }
};

export default MainReducer;
