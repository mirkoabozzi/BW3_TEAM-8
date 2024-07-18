import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { updateExperience, uploadExperiencePicture } from "../redux/actions";

const EditExperienceForm = ({ show, handleClose, experience, userId }) => {
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    if (experience) {
      setRole(experience.role);
      setCompany(experience.company);
      setDescription(experience.description);
      setArea(experience.area);
      setStartDate(experience.startDate);
      setEndDate(experience.endDate);
    }
  }, [experience]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedExperience = { role, company, description, area, startDate, endDate };
    await dispatch(updateExperience(userId, experience._id, updatedExperience));
    if (selectedFile) {
      await dispatch(uploadExperiencePicture(userId, experience._id, selectedFile));
    }
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" value={role} onChange={(e) => setRole(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrizione</Form.Label>
            <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Area</Form.Label>
            <Form.Control type="text" value={area} onChange={(e) => setArea(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Inizio</Form.Label>
            <Form.Control type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Data Fine</Form.Label>
            <Form.Control type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Immagine</Form.Label>
            <Form.Control type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />
          </Form.Group>
          <Button type="submit">Salva</Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditExperienceForm;
