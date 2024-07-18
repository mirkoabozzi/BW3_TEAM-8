import { useEffect, useState } from "react";
import { deletePost, getPosts, updatePost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Button, Modal, Spinner, Image } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import { Link } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";

const token = import.meta.env.VITE_API_KEY;

const Home = () => {
  const user = useSelector((state) => state.mainReducer.user);
  const posts = useSelector((state) => state.homeReducer.posts);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const dispatch = useDispatch();

  const [post, setPost] = useState("");
  const [editPost, setEditPost] = useState("");
  const [editPostId, setEditPostId] = useState(null);

  const [file, setFile] = useState(null);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const [showAddImagePostModal, setShowAddImagePostModal] = useState(false);
  const handleCloseImgProfileModal = () => setShowAddImagePostModal(false);
  const handleShowAddImagePostModal = () => setShowAddImagePostModal(true);

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
    await newPost(post);
    setPost("");
  };

  const handleSubmitEditPost = async (e) => {
    e.preventDefault();
    await dispatch(updatePost(editPostId, editPost));
    handleClose();
    setEditPost("");
    setEditPostId(null);
  };

  const hendleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const newPost = async (post) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: post }),
      });
      if (resp.ok) {
        const post = await resp.json();
        console.log("post", post);
        if (file) {
          await uploadPostPicture(post._id);
          dispatch(getPosts());
        }
        handleCloseImgProfileModal();
        dispatch(getPosts());

        return post;
      } else {
        throw new Error("Errore nell creazione del post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPostPicture = async (postId) => {
    const formData = new FormData();
    formData.append("post", file);

    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/posts/${postId}`, {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
        },
        body: formData,
      });

      if (resp.ok) {
        getPosts();
      } else {
        throw new Error("Errore nel caricamento dell'immagine del post");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(user);
  // console.log("posts", posts);
  // console.log("file", file);
  // console.log("editPostId", editPostId);

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="p-0" lg={3}>
            <HomeLeftBar />
          </Col>
          <Col lg={6}>
            <Container className="border rounded">
              <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                  <Row>
                    <Col xs="1">
                      <Image src={user.image} roundedCircle className="mb-2" style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }} />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setPost(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
              <div className="d-flex align-items-center">
                <Image
                  className="mb-2"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImltYWdlLW1lZGl1bSIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMjR4MjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTE5IDRINWEzIDMgMCAwMC0zIDN2MTBhMyAzIDAgMDAzIDNoMTRhMyAzIDAgMDAzLTNWN2EzIDMgMCAwMC0zLTN6bTEgMTNhMSAxIDAgMDEtLjI5LjcxTDE2IDE0bC0yIDItNi02LTQgNFY3YTEgMSAwIDAxMS0xaDE0YTEgMSAwIDAxMSAxem0tMi03YTIgMiAwIDExLTItMiAyIDIgMCAwMTIgMnoiLz4KPC9zdmc+"
                  style={{ width: 30 }}
                  onClick={() => handleShowAddImagePostModal()}
                />
                <p className="ms-2 mb-2" onClick={() => handleShowAddImagePostModal()}>
                  Contenuti Multimediali
                </p>
              </div>
            </Container>
            {isLoading ? (
              <Spinner animation="grow" />
            ) : (
              [...posts]
                .reverse()
                .slice(0, 30)
                .map((post) => {
                  return (
                    <Card key={post._id} className="my-2">
                      <Card.Img variant="top" src={post.image} />
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
      <Modal centered show={showAddImagePostModal} onHide={handleCloseImgProfileModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {user.name} {user.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">Aggiungi immagine</p>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setPost(e.target.value)} />
            <Form.Control type="file" accept="image/png, image/gif, image/jpeg" className="my-2" onChange={hendleFileChange} />
            <Button type="submit">Invia</Button>
          </Form>
        </Modal.Body>
      </Modal>

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
