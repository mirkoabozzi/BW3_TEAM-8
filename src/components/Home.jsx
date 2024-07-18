import { useEffect, useState } from "react";
import { getPosts, newPost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import { Link } from "react-router-dom";

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
    <Container className="mt-4">
      {/* Dispositivi Desktop */}
      <Row className="d-none d-lg-flex">
        <Col lg={3}>
          <HomeLeftBar />
        </Col>
        <Col lg={6}>
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
                  <Link to={`/${post.user._id}`} className="nav-link">
                    <Card.Title>{post.user.username}</Card.Title></Link>
                  <Card.Text>{post.text}</Card.Text>
                  <Card.Text>{dataConverter(post.createdAt)}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
        </Col>
        <Col lg={3} className="d-none d-md-block">
          <Notizie />
          <HomeFooter />
        </Col>
      </Row>

      {/* Dispositivi Medie dimensioni */}
      <Row className="d-none d-md-flex d-lg-none">
        <Col md={4}>
          <HomeLeftBar />
          <Notizie />
          <HomeFooter />
        </Col>
        <Col md={8}>
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
      </Row>

      {/* Dispositivi Mobile */}
      <Row className="d-flex d-md-none">
        <Col xs={12}>
          <HomeLeftBar />
        </Col>
        <Col xs={12}>
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
        <Col xs={12}>
          <Notizie />
          <HomeFooter />
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
