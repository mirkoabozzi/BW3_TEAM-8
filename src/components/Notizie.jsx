import { Container, Card, Col } from "react-bootstrap";

const Notizie = () => {
  return (
    <Container>
      <Card className="mb-3 text-start">
        <Card.Body>
          <Card.Title>LinkedIn Notizie</Card.Title>

          <Card.Text>Storie principali</Card.Text>
          <Col>
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small>2 ore fa • 30 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small>1 ora fa • 200 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small> Ieri • 143 lettori </small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small>8 ore fa • 400 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                Storie principali <br /> <small>12/07 • 19 lettori </small>
              </a>
            </small>
          </Col>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Notizie;
