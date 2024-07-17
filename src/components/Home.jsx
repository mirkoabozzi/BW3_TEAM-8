import { useEffect } from "react";
import { getPosts } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import Footer from "./Footer";

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
      <Row>
        <Col md={3}>
          <HomeLeftBar />
        </Col>
        <Col md={6}>
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
        </Col>
        <Col md={3}>
          <Notizie />
          <Footer></Footer>
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
