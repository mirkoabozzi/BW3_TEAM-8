import { useEffect, useState } from "react";
import { getPosts, newPost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";

const Home = () => {
  const posts = useSelector((state) => state.homeReducer.posts);
  const dispatch = useDispatch();

  const [post, setpost] = useState("");

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  // console.log("posts", posts);

  const dataConverter = (timeStamp) => {
    const data = new Date(timeStamp);
    return data.toLocaleString("it-it", {
      //weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      //second: "numeric",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(newPost(post)).then(() => {
      setpost("");
    });
  };

  return (
    <Container>
      <Row>
        <Col md={3}>
          <HomeLeftBar />
        </Col>
        <Col md={6}>
          <h1>Posts</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Aggiungi nuovo post</Form.Label>
              <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setpost(e.target.value)} />
            </Form.Group>
          </Form>
          {[...posts].reverse().map((post) => {
            return (
              <Card key={post._id} className="my-2">
                <Card.Body>
                  <Card.Title>{post.user.username}</Card.Title>
                  <Card.Text>{post.text}</Card.Text>
                  <Card.Text>{dataConverter(post.createdAt)}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <Col md={3}>
          <Notizie />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
