import {
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE,
    GET_COMMENTS_REQUEST, GET_COMMENTS_SUCCESS, GET_COMMENTS_FAILURE,
    DELETE_COMMENT_REQUEST, DELETE_COMMENT_SUCCESS, DELETE_COMMENT_FAILURE,
    UPDATE_COMMENT_REQUEST, UPDATE_COMMENT_SUCCESS, UPDATE_COMMENT_FAILURE
  } from "../actions";
  
  const initialState = {
    commentsByPost: {}, // Stato per gestire i commenti per post
    loading: false,
    error: null,
  };
  
  const commentsReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_COMMENT_REQUEST:
      case GET_COMMENTS_REQUEST:
      case DELETE_COMMENT_REQUEST:
      case UPDATE_COMMENT_REQUEST:
        return {
          ...state,
          loading: true,
          error: null,
        };
      case ADD_COMMENT_SUCCESS:
        const addedComment = action.payload;
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [addedComment.elementId]: [
              ...(state.commentsByPost[addedComment.elementId] || []),
              addedComment,
            ],
          },
        };
      case GET_COMMENTS_SUCCESS:
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [action.postId]: action.payload,
          },
        };
      case DELETE_COMMENT_SUCCESS:
        const deletedCommentId = action.payload;
        return {
          ...state,
          loading: false,
          commentsByPost: Object.keys(state.commentsByPost).reduce((acc, postId) => {
            acc[postId] = state.commentsByPost[postId].filter(comment => comment._id !== deletedCommentId);
            return acc;
          }, {}),
        };
      case UPDATE_COMMENT_SUCCESS:
        const updatedComment = action.payload;
        return {
          ...state,
          loading: false,
          commentsByPost: {
            ...state.commentsByPost,
            [updatedComment.elementId]: state.commentsByPost[updatedComment.elementId].map(comment =>
              comment._id === updatedComment._id ? updatedComment : comment
            ),
          },
        };
      case ADD_COMMENT_FAILURE:
      case GET_COMMENTS_FAILURE:
      case DELETE_COMMENT_FAILURE:
      case UPDATE_COMMENT_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default commentsReducer;
  