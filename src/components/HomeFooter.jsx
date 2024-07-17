import { Container, Row, Col, NavDropdown } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <footer>
      <Container className="mt-5 text-center" style={{ fontSize: "12px" }}>
        <Row className="">
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Informazioni
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Accessibilità
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {" "}
            <a className="text-decoration-none" href="#" alt="footer link">
              Centro Assistenza
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavDropdown title="Privacy e condizioni" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Informativa sulla privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Termini e condizioni</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Contratto di licenza</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {" "}
            <a className="text-decoration-none" href="#" alt="footer link">
              Opzioni per gli annunci pubblicitari
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Pubblicità
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Servizi alle aziende
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Scarica l'app LinkedIn
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link">
              Altro
            </a>
          </Col>
        </Row>
        <Row className="text-center mb-2 mt-2">
          <Col className="copyright">LinkedIn Corporation © 2024</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HomeFooter;
