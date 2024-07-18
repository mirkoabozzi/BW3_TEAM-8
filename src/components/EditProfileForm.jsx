import { useEffect, useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../redux/actions";

const EditProfileForm = ({ show, handleClose }) => {
  const user = useSelector((state) => state.mainReducer.user);
  const [name, setName] = useState(user.name || "");
  const [surname, setSurname] = useState(user.surname);
  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [title, setTitle] = useState(user.title);
  const [bio, setBio] = useState(user.bio);
  const [area, setArea] = useState(user.area);
  const dispatch = useDispatch();

  const newProfileInfo = {
    name,
    surname,
    email,
    username,
    bio,
    title,
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(newProfileInfo));
    handleClose();
  };

  useEffect(() => {
    setName(user.name);
    setSurname(user.surname);
    setUsername(user.username);
    setEmail(user.email);
    setTitle(user.title);
    setBio(user.bio);
    setArea(user.area);
  }, [user]);

  //   console.log("user edit profile", user);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Profilo</Modal.Title>s
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="name">
            <Form.Label>Nome</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il Nome" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="surname">
            <Form.Label>Cognome</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il cognome" value={surname} onChange={(e) => setSurname(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="username">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Inserisci username" value={username} onChange={(e) => setUsername(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Inserisci email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Titolo</Form.Label>
            <Form.Control type="text" rows={3} placeholder="Inserisci il titolo" value={title} onChange={(e) => setTitle(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="bio">
            <Form.Label>Bio</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Inserisci bio" value={bio} onChange={(e) => setBio(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="area">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" placeholder="Inserisci Area" value={area} onChange={(e) => setArea(e.target.value)} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Modifica Profilo
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};
export default EditProfileForm;
