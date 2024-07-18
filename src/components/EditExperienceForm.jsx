import { useState, useEffect } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EditExperienceForm = ({ show, handleClose, experience, onSave }) => {
  const [formValues, setFormValues] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    description: "",
    area: "",
  });

  useEffect(() => {
    if (experience) {
      setFormValues({
        role: experience.role,
        company: experience.company,
        startDate: experience.startDate,
        endDate: experience.endDate,
        description: experience.description,
        area: experience.area,
      });
    }
  }, [experience]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formValues);
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Modifica Esperienza</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="role">
            <Form.Label>Ruolo</Form.Label>
            <Form.Control type="text" name="role" value={formValues.role} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="company">
            <Form.Label>Azienda</Form.Label>
            <Form.Control type="text" name="company" value={formValues.company} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="startDate">
            <Form.Label>Data di Inizio</Form.Label>
            <Form.Control type="date" name="startDate" value={formValues.startDate} onChange={handleChange} required />
          </Form.Group>
          <Form.Group controlId="endDate">
            <Form.Label>Data di Fine</Form.Label>
            <Form.Control type="date" name="endDate" value={formValues.endDate} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="description">
            <Form.Label>Descrizione</Form.Label>
            <Form.Control type="text" name="description" value={formValues.description} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="area">
            <Form.Label>Luogo</Form.Label>
            <Form.Control type="text" name="area" value={formValues.area} onChange={handleChange} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Salva
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditExperienceForm;
