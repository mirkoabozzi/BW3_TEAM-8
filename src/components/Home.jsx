import { useEffect, useState } from "react";
import { getPosts, newPost, updatePost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Button, Modal } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import { Link } from "react-router-dom";

const Home = () => {
  // const user = useSelector((state) => state.mainReducer.user);
  const posts = useSelector((state) => state.homeReducer.posts);
  // const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const dispatch = useDispatch();

  const [post, setpost] = useState("");
  const [editPost, setEditPost] = useState("");
  const [editPostId, setEditPostId] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  // const handleShow = (post) => {
  //   setEditPost(post.text);
  //   setEditPostId(post._id);
  //   setShow(true);
  // };

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  const dataConverter = (timeStamp) => {
    const data = new Date(timeStamp);
    return data.toLocaleString("it-it", {
      //weekday: "long",
      year: "numeric",
      month: "numeric",
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

  const handleSubmitEditPost = async (e) => {
    e.preventDefault();
    await dispatch(updatePost(editPostId, editPost)).then(() => {
      handleClose();
      setEditPost("");
      setEditPostId(null);
    });
  };
  // console.log(user._id);
  // console.log("posts", posts);

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

      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEditPost}>
            <Form.Control type="text" className="my-2" value={editPost} onChange={(e) => setEditPost(e.target.value)} />
            <Button type="submit">Invia</Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>

  );
};
export default Home;
