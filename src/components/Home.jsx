import { useEffect, useState } from "react";
import { deletePost, getPosts, newPost, updatePost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Button, Modal, Spinner, Image } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

const Home = () => {
  const user = useSelector((state) => state.mainReducer.user);
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
  console.log(user);
  console.log("posts", posts);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="p-0" lg={3}>
            <HomeLeftBar />
          </Col>
          <Col lg={6}>
            <Card>
              <Container>
                <Form className="mt-3" onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="text">
                    <Row>
                      <Col xs="1">
                        <Image src={user.image} roundedCircle className="mb-2" style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }} />
                      </Col>
                      <Col>
                        <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setpost(e.target.value)} />
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
                <div className="d-flex align-items-center">
                  <Image
                    className="mb-2"
                    src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImltYWdlLW1lZGl1bSIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMjR4MjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTE5IDRINWEzIDMgMCAwMC0zIDN2MTBhMyAzIDAgMDAzIDNoMTRhMyAzIDAgMDAzLTNWN2EzIDMgMCAwMC0zLTN6bTEgMTNhMSAxIDAgMDEtLjI5LjcxTDE2IDE0bC0yIDItNi02LTQgNFY3YTEgMSAwIDAxMS0xaDE0YTEgMSAwIDAxMSAxem0tMi03YTIgMiAwIDExLTItMiAyIDIgMCAwMTIgMnoiLz4KPC9zdmc+"
                    style={{ width: 30 }}
                  />
                  <p className="ms-2 mb-2">Contenuti Multimediali</p>
                </div>
              </Container>
            </Card>
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
                          <Link to={`/${post.user._id}`} className="nav-link">
                            <Image
                              src={post.user?.image}
                              roundedCircle
                              height={40}
                              width={40}
                              className="mb-2"
                              style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }}
                            />
                            <Card.Title>{post.user.username}</Card.Title>
                          </Link>
                          {user._id === post.user._id && <Trash onClick={() => dispatch(deletePost(post._id))} />}
                        </div>
                        <Card.Text>{post.text}</Card.Text>
                        <Card.Text className="mb-0">Data creazione {dataConverter(post.createdAt)}</Card.Text>
                        <Card.Text>Ultima modifica {dataConverter(post.updatedAt)}</Card.Text>
                        {user._id === post.user._id && (
                          <Button className="d-block mx-auto" onClick={() => handleShow(post)}>
                            Modifica
                          </Button>
                        )}
                      </Card.Body>
                    </Card>
                  );
                })
            )}
          </Col>
          <Col lg={3} className="d-none d-lg-block p-0">
            <Notizie />
            <HomeFooter />
          </Col>
        </Row>
      </Container>
      {/* Modale aggiungi immagine post */}

      {/* Modale Modifica post */}
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
