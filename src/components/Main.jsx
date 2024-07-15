import { Button, Card, Container, Image } from "react-bootstrap";

import { CameraFill, Pencil, Plus } from 'react-bootstrap-icons';


const Main = () => {
  return (
    <Container>
      <Container className="position-relative">
        <Card className="mt-3">
          <Card.Img variant="top" src="https://media.istockphoto.com/id/1960952508/photo/dark-blue-gradient-soft-background.jpg?b=1&s=612x612&w=0&k=20&c=EBIpDSGaimw9Ci3v8nsNMC_A6kTZeiqF9EWWcf8TMkQ=" height={250} />
          <div className="position-absolute bg-white p-1 container-camera" style={{ right: 50, top: 70 }}>
            <CameraFill width={25} height={25} fill="#0A66C2" />
          </div>
          <Image src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png" alt="avatar user" height={150} width={150} className="position-absolute rounded-circle ms-4" style={{ top: 160, border: "5px solid white" }} />
          <Card.Body className="mt-5">
            <Pencil width={20} height={20} className="position-absolute" style={{ top: 265, right: 50 }} />
            <Card.Title>Nome</Card.Title>
            <Card.Text>
              Professione
            </Card.Text>
            <Card.Text>
              Località &middot;
              <a href="#" className="fw-bold text-decoration-none ms-1">Informazioni di contatto</a>
            </Card.Text>
            <Button variant="primary" className="rounded-pill me-2 ">Disponibile per</Button>
            <Button variant="white" className="rounded-pill me-2 border-primary text-primary">Aggiungi sezione del profilo</Button>
            <Button variant="white" className="rounded-pill me-2 border-primary text-primary">Migliora profilo</Button>
            <Button variant="white" className="border-black rounded-pill me-2">Altro</Button>
          </Card.Body>
        </Card>

        {/* competenze */}
        <Card className="mt-3">

          <Card.Body >
            <div className="d-flex justify-content-between me-4">
              <Card.Title>Competenze</Card.Title>
              <div>
                <Plus width={35} height={35} className="me-2" />
                <Pencil width={20} height={20} />
              </div>
            </div>
            <Card.Text className="fw-bold mt-2">
              Competenza
            </Card.Text>
            <Card.Text>
              Descrizione competenza
            </Card.Text>

          </Card.Body>
        </Card>
      </Container>
    </Container>
  );
};

export default Main;
