import { useEffect } from "react";
import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container } from "react-bootstrap";

const Home = () => {
  const posts = useSelector((state) => state.homeReducer.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(posts);

  return (
    <Container>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <Card key={post._id} className="my-2">
            <Card.Body>
              <Card.Title>{post.user.username}</Card.Title>
              <Card.Text>{post.text}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </Container>
  );
};
export default Home;
