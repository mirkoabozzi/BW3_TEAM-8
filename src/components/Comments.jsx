import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getComments, addComment, deleteComment } from "../redux/actions";
import { Button } from "react-bootstrap";

const Comments = ({ postId }) => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.commentsReducer.commentsByPost[postId] || []);
  const loading = useSelector((state) => state.commentsReducer.loading);
  const error = useSelector((state) => state.commentsReducer.error);

  useEffect(() => {
    dispatch(getComments(postId));
  }, [dispatch, postId]);

  const handleAddComment = (e) => {
    e.preventDefault();
    const commentText = e.target.comment.value;
    dispatch(addComment(commentText, "5", postId)); // Usa postId qui
    e.target.comment.value = "";
  };

  const handleDeleteComment = (commentId) => {
    dispatch(deleteComment(commentId));
  };

  return (
    <div>
      <h5>Commenti</h5>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {comments.map((comment) => (
          <li key={comment._id}>
            {comment.comment}
            <Button variant="danger" size="sm" className="ms-2" onClick={() => handleDeleteComment(comment._id)}>
              Delete
            </Button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleAddComment}>
        <input type="text" name="comment" placeholder="Aggiungi un commento" required />
        <button type="submit">Invia</button>
      </form>
    </div>
  );
};

export default Comments;
