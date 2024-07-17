import { Container, Row, Col, NavDropdown } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={12} md={6} className="text-center mb-2">
            <i className="bi bi-facebook footer-icon me-2"></i>
            <i className="bi bi-instagram footer-icon me-2"></i>
            <i className="bi bi-twitter-x footer-icon me-2"></i>
            <i className="bi bi-youtube footer-icon"></i>
          </Col>
        </Row>
        <Row className="row-cols-1 row-cols-sm-2 row-cols-md-5 mb-2">
          <Col>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Informazioni
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Linee guida della Community
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Privacy
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Sales solutions
              </a>
            </p>
          </Col>
          <Col>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Accessibilità
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Carriera
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Opzioni per gli annunci pubblicitari
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Mobile
              </a>
            </p>
          </Col>
          <Col>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Talent Solutions
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Soluzioni di Marketing
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Pubblicità
              </a>
            </p>
            <p>
              <a className="text-decoration-none" href="#" alt="footer link">
                Piccole Imprese
              </a>
            </p>
          </Col>
          <Col>
            <Row>
              <Col xs="2">
                {" "}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgY2xhc3M9InJ0bC1mbGlwIiBpZD0icXVlc3Rpb24tc21hbGwiIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjE2eDE2IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik04IDFhNyA3IDAgMTA3IDcgNyA3IDAgMDAtNy03em0wIDExLjI1QTEuMjUgMS4yNSAwIDExOS4yNSAxMSAxLjI1IDEuMjUgMCAwMTggMTIuMjV6TTguODIgOUg3di0uOTVsLjkzLS40NkM4LjY0IDcuMjQgOSA2Ljg5IDkgNi42UzguNTcgNiA4IDZhNi40OSA2LjQ5IDAgMDAtMyAuOTFWNC44NEE2LjM1IDYuMzUgMCAwMTguMSA0YzIgMCAyLjkgMSAyLjkgMi40IDAgLjktLjUgMS44My0yLjE4IDIuNnoiLz4KPC9zdmc+"
                  alt="Punto interrogativo"
                  height={30}
                />
              </Col>
              <Col>
                <p className="fw-bold mb-0">
                  <a
                    className="text-decoration-none"
                    href="#"
                    alt="footer link"
                  >
                    Domande?
                  </a>
                </p>
                <small>Visita il nostro centro assistenza</small>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                {" "}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InNldHRpbmdzLW1lZGl1bSIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMjR4MjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTkuMTggMmwtNC4zIDIuNTJMNi4yMiA4bC0uNTIuOTEtMy43LjU1djVsMy42NC41NC41NC45My0xLjM0IDMuNTNMOS4xNCAyMmwyLjI5LTIuOWgxLjA5bDIuMyAyLjkgNC4zMi0yLjUyTDE3Ljc5IDE2bC41My0uOTMgMy42OC0uNTN2LTVMMTguMzIgOWwtLjUxLS45IDEuMzYtMy41MUwxNC44NiAybC0yLjMzIDNoLTF6TTEyIDlhMyAzIDAgMTEtMyAzIDMgMyAwIDAxMy0zeiIvPgo8L3N2Zz4="
                  alt="Punto interrogativo"
                  height={30}
                />
              </Col>
              <Col>
                <p className="fw-bold mb-0">
                  <a
                    className="text-decoration-none"
                    href="#"
                    alt="footer link"
                  >
                    Gestisci il tuo account e la tua privacy
                  </a>
                </p>
                <small>Vai nelle impostazioni</small>
              </Col>
            </Row>
            <Row>
              <Col xs="2">
                {" "}
                <img
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9InNoaWVsZC1tZWRpdW0iIGFyaWEtaGlkZGVuPSJ0cnVlIiByb2xlPSJub25lIiBkYXRhLXN1cHBvcnRlZC1kcHM9IjI0eDI0IiBmaWxsPSJjdXJyZW50Q29sb3IiPgogIDxwYXRoIGQ9Ik0xMiAyTDMgNXY2YzAgNSAzLjEyIDguODEgNy43NyAxMC41NkwxMiAyMmwxLjI3LS40NEMxNy45IDE5LjgxIDIxLjAxIDE2IDIxLjAxIDExVjVMMTIgMnptLS41MyAxNy44QzcuNiAxOC4zNSA1LjAxIDE1LjEgNS4wMSAxMVY2LjQ0bDctMi4zMlYyMGwtLjU0LS4yeiIvPgo8L3N2Zz4="
                  alt="Punto interrogativo"
                  height={30}
                />
              </Col>
              <Col>
                <p className="fw-bold mb-0">
                  <a
                    className="text-decoration-none"
                    href="#"
                    alt="footer link"
                  >
                    Trasparenza sui contenuti consigliati
                  </a>
                </p>
                <small>Scopri di più sui contenuti consigliati</small>
              </Col>
            </Row>
          </Col>
          <Col>
            <NavDropdown title="Lingua" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Inglese</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Spagnolo</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Italiano</NavDropdown.Item>
            </NavDropdown>
          </Col>
        </Row>
        <Row className="text-center mb-2 mt-2">
          <Col className="copyright">LinkedIn Corporation © 2024</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
