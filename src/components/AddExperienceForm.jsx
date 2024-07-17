import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addExperience, uploadExperiencePicture } from "../redux/actions";

const AddExperienceForm = ({ show, handleClose, userId }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newExperience = {
      role,
      company,
      startDate,
      endDate,
      description,
      area,
    };

    try {
      const response = await dispatch(addExperience(userId, newExperience));
      if (response && selectedFile) {
        await dispatch(uploadExperiencePicture(userId, response._id, selectedFile));
      }
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Aggiungi Nuova Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formRole">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il ruolo" value={role} onChange={(e) => setRole(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formCompany">
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" placeholder="Inserisci il nome dell'azienda" value={company} onChange={(e) => setCompany(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formStartDate">
            <Form.Label>Data di Inizio</Form.Label>
            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEndDate">
            <Form.Label>Data di Fine</Form.Label>
            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formDescription">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control as="textarea" rows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formArea">
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" placeholder="Inserisci l'area" value={area} onChange={(e) => setArea(e.target.value)} />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Carica Immagine Esperienza</Form.Label>
            <Form.Control type="file" onChange={handleFileChange} />
          </Form.Group>

          <Button variant="primary" type="submit">
            Aggiungi Esperienza
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddExperienceForm;
