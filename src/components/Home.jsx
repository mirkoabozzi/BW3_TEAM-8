import { useEffect, useState } from "react";
import { getPosts, newPost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Container, Form, Row } from "react-bootstrap";
import Notizie from "./Notizie";

const Home = () => {
  const posts = useSelector((state) => state.homeReducer.posts);
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(getPosts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // console.log(posts);

  const dataConverter = (timeStamp) => {
    const data = new Date(timeStamp);
    return data.toLocaleString("it-it", {
      // weekday: "long",
      // year: "numeric",
      // month: "long",
      // day: "numeric",
      // hour: "numeric",
      // minute: "numeric",
      timeZone: "UTC",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      // second: "2-digit",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(newPost(comment));
  };

  return (
    <Container>
      <Row>
        <Col md={3}>{/* <HomeLeftBar /> */}</Col>
        <Col md={6}>
          <h1>Posts</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="text">
              <Form.Label>Aggiungi nuovo post</Form.Label>
              <Form.Control type="text" placeholder="Scrivi qualcosa" value={comment} onChange={(e) => setComment(e.target.value)} />
            </Form.Group>
          </Form>
          {posts.map((post) => {
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
