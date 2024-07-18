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
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Transizione elettrica: un discorso aperto</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Alla comunicazione servono processi chiari</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Dove crescono (e calano) i salari</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Fnac prova a prendersi Unieuro</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Due italiane al top nella matematica</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <strong style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block" }}>Flessibilità e mobilità green per Generali</strong>
                <small>3 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              {" "}
              <a className="text-decoration-none text-black" href="">
                Vedi altro
              </a>{" "}
              <img
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNiIgaWQ9ImNoZXZyb24tZG93bi1zbWFsbCIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMTZ4MTYiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTEgNWw3IDQuNjFMMTUgNXYyLjM5TDggMTIgMSA3LjM5eiIvPgo8L3N2Zz4="
                alt=""
                width={15}
              />
            </small>
          </Col>
          <Card.Text></Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Notizie;
