import { SET_USER, SET_PROFILES, SET_SELECTED_USER, SET_EXPERIENCES } from "../actions";

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
    default:
      return state;
  }
};

export default MainReducer;
