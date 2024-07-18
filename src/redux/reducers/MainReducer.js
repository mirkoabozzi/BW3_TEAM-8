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
  token: ""
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
