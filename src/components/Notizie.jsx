import { Container, Card } from "react-bootstrap";

const Notizie = () => {
  return (
    <Container>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>Card 1</Card.Title>
          <Card.Text>Contenuto della prima card.</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Notizie;
