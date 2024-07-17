import { GET_POSTS, ADD_NEW_POST } from "../actions";

const initialState = {
  posts: [],
  // post: {
  //   text: "Questo è un nuovo post",
  //   username: "mario88",
  //   createdAt: "2023-10-01T19:44:04.496Z",
  //   updatedAt: "2023-10-01T19:44:04.496Z",
  //   _id: "5d93ac84b86e220017e76ae1",
  // },
};

const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    // case ADD_NEW_POST:
    //   return {
    //     ...state,
    //     post: action.payload,
    //   };

    default:
      return state;
  }
};
export default HomeReducer;
