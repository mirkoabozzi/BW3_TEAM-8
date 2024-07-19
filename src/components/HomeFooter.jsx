import { Container, Row, Col, NavDropdown, Image } from "react-bootstrap";

const HomeFooter = () => {
  return (
    <footer>
      <Container className="mt-5 text-center" style={{ fontSize: "12px" }}>
        <Row className="">
          <Col md={6}>
            <a className="text-decoration-none" style={{ color: "grey" }} href="#" alt="footer link">
              Informazioni
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" style={{ color: "grey" }} href="#" alt="footer link">
              Accessibilità
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {" "}
            <a className="text-decoration-none" style={{ color: "grey" }} href="#" alt="footer link">
              Centro Assistenza
            </a>
          </Col>
        </Row>
        <Row>
          <Col>
            <NavDropdown title="Privacy e condizioni" id="basic-nav-dropdown" style={{ color: "grey" }}>
              <NavDropdown.Item href="#action/3.1" style={{ color: "grey" }}>Informativa sulla privacy</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" style={{ color: "grey" }}>Termini e condizioni</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" style={{ color: "grey" }}>Contratto di licenza</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            {" "}
            <a className="text-decoration-none" href="#" alt="footer link" style={{ color: "grey" }}>
              Opzioni per gli annunci pubblicitari
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link" style={{ color: "grey" }}>
              Pubblicità
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link" style={{ color: "grey" }}>
              Servizi alle aziende
            </a>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link" style={{ color: "grey" }}>
              Scarica l&apos;app LinkedIn
            </a>
          </Col>
          <Col md={6}>
            <a className="text-decoration-none" href="#" alt="footer link" style={{ color: "grey" }}>
              Altro
            </a>
          </Col>
        </Row>
        <Row className="text-center mb-2 mt-2">
          <Col className="copyright d-flex align-items-center ms-4">
            <Image src="https://download.logo.wine/logo/LinkedIn/LinkedIn-Logo.wine.png" width="80" height="30" style={{ objectFit: "cover" }} />
            <div>LinkedIn Corporation © 2024</div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default HomeFooter;
