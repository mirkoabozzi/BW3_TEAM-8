import { useEffect, useState } from "react";
import { deletePost, getPosts, newPost, updatePost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Spinner, Button, Modal } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import { Trash } from "react-bootstrap-icons";
import HomeFooter from "./HomeFooter";

const Home = () => {
  const posts = useSelector((state) => state.homeReducer.posts);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const dispatch = useDispatch();

  const [post, setpost] = useState("");
  const [editPost, setEditPost] = useState("");
  const [editPostId, setEditPostId] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (post) => {
    setEditPost(post.text);
    setEditPostId(post._id);
    setShow(true);
  };

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

  console.log("posts", posts);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col lg={3}>
            <HomeLeftBar />
          </Col>
          <Col lg={6}>
            <h1>Home</h1>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="text">
                <Form.Label>Aggiungi nuovo post</Form.Label>
                <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setpost(e.target.value)} />
              </Form.Group>
            </Form>
            {isLoading ? (
              <Spinner animation="grow" />
            ) : (
              [...posts]
                .reverse()
                .slice(0, 30)
                .map((post) => {
                  return (
                    <Card key={post._id} className="my-2">
                      <Card.Body>
                        <div className="d-flex justify-content-between">
                          <Card.Title>{post.user.username}</Card.Title>
                          <Trash onClick={() => dispatch(deletePost(post._id))} />
                        </div>
                        <Card.Text>{post.text}</Card.Text>
                        <Card.Text className="mb-0">Data creazione {dataConverter(post.createdAt)}</Card.Text>
                        <Card.Text>Ultima modifica {dataConverter(post.updatedAt)}</Card.Text>
                        <Button className="d-block mx-auto" onClick={() => handleShow(post)}>
                          Modifica
                        </Button>
                      </Card.Body>
                    </Card>
                  );
                })
            )}
          </Col>
          <Col lg={3} className="d-none d-lg-block">
            <Notizie />
            <HomeFooter />
          </Col>
        </Row>
      </Container>

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
    </>
  );
};
export default Home;
