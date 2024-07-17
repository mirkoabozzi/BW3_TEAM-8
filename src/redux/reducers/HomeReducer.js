import { GET_POSTS, GET_POSTS_LOADING_OFF, GET_POSTS_LOADING_ON } from "../actions";

const initialState = {
  posts: [],
  isLoading: false,
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POSTS_LOADING_ON:
      return {
        ...state,
        isLoading: true,
      };
    case GET_POSTS_LOADING_OFF:
      return {
        ...state,
        isLoading: false,
      };

    default:
      return state;
  }
};
export default HomeReducer;
