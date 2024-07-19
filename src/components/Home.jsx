import { useEffect, useState } from "react";
import { deletePost, getCommentsHome, getPosts, postComment, updatePost, setSelectedUser } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Button, Modal, Spinner, Image, ListGroup } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import { Link, useNavigate } from "react-router-dom";
import { Trash } from "react-bootstrap-icons";
import Messages from "./Messages";

const token = import.meta.env.VITE_API_KEY;

const Home = () => {
  const user = useSelector((state) => state.mainReducer.user);
  const posts = useSelector((state) => state.homeReducer.posts);
  const comments = useSelector((state) => state.homeReducer.comments);
  const isLoading = useSelector((state) => state.homeReducer.isLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [postText, setPostText] = useState("");
  const [editPost, setEditPost] = useState("");
  const [editPostId, setEditPostId] = useState(null);

  const [comment, setComment] = useState("");
  const [rate, setRate] = useState("1");
  const [postId, setPostId] = useState("");

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
    dispatch(getCommentsHome());
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
    await newPost(postText);
    setPostText("");
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

  const newPost = async (postText) => {
    try {
      const resp = await fetch("https://striveschool-api.herokuapp.com/api/posts/", {
        method: "POST",
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: postText }),
      });
      if (resp.ok) {
        const post = await resp.json();
        // console.log("post", post);
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

  const handlePostComment = async (e) => {
    e.preventDefault();
    const newComment = {
      comment: comment,
      rate: rate,
      elementId: postId,
    };
    dispatch(postComment(newComment));
    setComment("");
  };

  // const handleDeleteComment = async () => {
  //   dispatch(deleteComment());
  // };
  const handleUserClick = (postUser) => {
    dispatch(setSelectedUser(postUser));
    navigate(`/user/${postUser._id}`);
  };

  return (
    <>
      <Container className="mt-4">
        <Row>
          <Col className="p-0" lg={3}>
            <HomeLeftBar />
          </Col>
          <Col lg={6}>
            <Container className="border rounded bg-white">
              <Form className="mt-3" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="text">
                  <Row>
                    <Col xs="1">
                      <Image src={user.image} roundedCircle className="mb-2" style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }} />
                    </Col>
                    <Col>
                      <Form.Control type="text" placeholder="Crea un post" value={postText} onChange={(e) => setPostText(e.target.value)} />
                    </Col>
                  </Row>
                </Form.Group>
              </Form>
              <div className=" hoverEffect d-inline-block mb-2" style={{ cursor: "pointer" }} onClick={() => handleShowAddImagePostModal()}>
                <div className="d-flex align-items-center p-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" id="image-medium" aria-hidden="true" role="none" data-supported-dps="24x24" fill="#0A66C2">
                    <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
                  </svg>
                  <p className="ms-2 mb-0">Contenuti Multimediali</p>
                </div>
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
                          <Link to={`/profile/${post.user._id}`} className="nav-link">
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

                          {user._id === post.user._id && <Trash style={{ cursor: "pointer" }} onClick={() => dispatch(deletePost(post._id))} />}
                        </div>
                        <Card.Text className=" pb-2">{post.text}</Card.Text>
                        <Card.Text className="mb-0" style={{ fontSize: "13px" }}>
                          Data creazione: {dataConverter(post.createdAt)}
                        </Card.Text>
                        <Card.Text className="border-bottom pb-4" style={{ fontSize: "13px" }}>
                          Ultima modifica {dataConverter(post.updatedAt)}
                        </Card.Text>

                        <div className="d-flex" style={{ justifyContent: "space-around", cursor: "pointer" }}>
                          <div className="d-flex align-items-center">
                            <div className="me-1" style={{ fontWeight: "500" }}>
                              Consiglia
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-thumbs-up" viewBox="0 0 16 16">
                              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                            </svg>
                          </div>

                          <div className="d-flex align-items-center">
                            <div className="me-1" style={{ fontWeight: "500" }}>
                              Commenta
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chat-left-text" viewBox="0 0 16 16">
                              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                              <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5" />
                            </svg>
                          </div>

                          <div className="d-flex align-items-center">
                            <div className="me-1" style={{ fontWeight: "500" }}>
                              Condividi
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-share" viewBox="0 0 16 16">
                              <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                            </svg>
                          </div>

                          <div className="d-flex align-items-center">
                            <div className="me-1" style={{ fontWeight: "500" }}>
                              Condividi
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-save" viewBox="0 0 16 16">
                              <path d="M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1z" />
                            </svg>
                          </div>
                        </div>

                        {/* Form aggiungi commenti */}
                        <Form className="mt-4" onSubmit={handlePostComment}>
                          <Form.Group className="mb-3 input-comment" controlId="text">
                            <Row>
                              <Col xs="1">
                                <Image
                                  src={user.image}
                                  roundedCircle
                                  className="mb-2"
                                  style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }}
                                />
                              </Col>
                              <Col>
                                <Form.Control
                                  type="text"
                                  placeholder="Aggiungi un commento..."
                                  value={comment}
                                  onChange={(e) => {
                                    setComment(e.target.value);
                                    setPostId(post._id);
                                  }}
                                />
                              </Col>
                            </Row>
                          </Form.Group>
                        </Form>

                        {/* commenti utenti */}

                        <ListGroup>
                          {comments
                            .filter((comment) => {
                              return comment.elementId === post._id;
                            })
                            .map((comment) => {
                              console.log("comment", comment);
                              return (
                                <ListGroup.Item className="my-2" style={{ backgroundColor: "#F2F2F2", border: "none" }} key={comment.elementId}>
                                  <div className="d-flex justify-content-between">
                                    <p style={{ fontSize: "14px", fontWeight: "600" }}>{comment.author}</p>
                                    <div className="d-flex">
                                      <p style={{ fontSize: "13px" }}>{dataConverter(comment.createdAt)}</p>
                                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots ms-3" viewBox="0 0 16 16">
                                        <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                      </svg>
                                    </div>
                                  </div>
                                  <div className="d-flex justify-content-between" style={{ fontSize: "13px" }}>
                                    {comment.comment}
                                    {user.username === comment.author && <Trash style={{ cursor: "pointer" }} onClick={() => dispatch(deleteComment(comment._id))} />}
                                  </div>
                                </ListGroup.Item>
                              );
                            })}
                        </ListGroup>

                        {user._id === post.user._id && (
                          <Button className="d-block mx-auto mt-2 rounded-pill modify-comment" style={{ backgroundColor: "#0A66C2" }} onClick={() => handleShow(post)}>
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
        <Messages />
      </Container>
      <Modal show={showAddImagePostModal} onHide={handleCloseImgProfileModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <Image src={user.image} roundedCircle className="me-2" style={{ objectFit: "cover", objectPosition: "center", border: "3px solid white", width: "38px", height: "38px" }} />
            {user.name} {user.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Control as="textarea" placeholder="Di cosa vorresti parlare?" value={postText} onChange={(e) => setPostText(e.target.value)} />
            <Form.Control type="file" accept="image/png, image/gif, image/jpeg" className="my-2" onChange={hendleFileChange} />
            <Button type="submit">Invia</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modifica Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmitEditPost}>
            <Form.Control type="text" className="my-2" value={editPost} onChange={(e) => setEditPost(e.target.value)} />
            <Button className="rounded-pill" style={{ backgroundColor: "#0A66C2" }} type="submit">
              Invia
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Home;
