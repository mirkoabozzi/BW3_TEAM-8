import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Container className="d-inline-block text-center">
      <h1>404 Not Found</h1>
      <Button variant="light" onClick={() => navigate("/home")}>
        Back To Home
      </Button>
    </Container>
  );
};
export default NotFound;
