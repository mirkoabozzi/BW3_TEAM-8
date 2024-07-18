import {
  SET_USER, SET_PROFILES, SET_SELECTED_USER, SET_EXPERIENCES, SEARCH_JOBS_REQUEST,
  SEARCH_JOBS_SUCCESS,
  SEARCH_JOBS_FAILURE,
  SET_SELECTED_JOB,
} from "../actions";

const initialState = {
  user: {
    _id: "6694d5f8196d7b0015d6b525",
    name: "Mirko",
    surname: "Abozzi",
    email: "mirko.abozzi@gmail.com",
    username: "mirkoabozzi",
    title: "Full Stack Web Developer",
    bio: "About me",
    area: "Sedini, Sardegna, Italia",
    image: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png",
    createdAt: "2024-07-15T07:55:36.771Z",
    updatedAt: "2024-07-15T07:55:36.771Z",
  },
  profiles: [],
  selectedUser: null,
  experiences: [],
  selectedJob: null,
  jobs: [],
  token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njk0ZDEwNjE5NmQ3YjAwMTVkNmI1MjQiLCJpYXQiOjE3MjEwMjg4NzAsImV4cCI6MTcyMjIzODQ3MH0.lxTMuD2HxVncxLT71LT_2gTwR02C2dbSQrtfInlKotk",
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


