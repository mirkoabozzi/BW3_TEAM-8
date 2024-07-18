import { Container, Card, Col } from "react-bootstrap";

const Notizie = () => {
  return (
    <Container className="p-0">
      <Card className="mb-3 text-start p-0">
        <Card.Body>
          <Card.Title className="d-flex justify-content-between">LinkedIn Notizie
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-info-square-fill" viewBox="0 0 16 16">
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
            </div>
          </Card.Title>

          <Card.Text className="d-flex">
            <div style={{ fontSize: "15px", color: "grey" }}>Storie principali</div>

          </Card.Text>
          <Col>
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Transizione elettrica: un discorso aperto</div>
                <small style={{ color: "grey" }}>4 ore fa • 190 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Alla comunicazione servono processi chiari</div>
                <small style={{ color: "grey" }}>3 ore fa • 127 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Dove crescono (e calano) i salari</div>
                <small style={{ color: "grey" }}>3 ore fa • 68 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Fnac prova a prendersi Unieuro</div>
                <small style={{ color: "grey" }}>2 giorni fa • 124 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Due italiane al top nella matematica</div>
                <small style={{ color: "grey" }}>8 ore fa • 36 lettori</small>
              </a>
            </small>
            <br />
            <small>
              <a className="text-decoration-none text-black" href="">
                <div style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", display: "block", fontWeight: "600" }}>Flessibilità e mobilità green per Generali</div>
                <small style={{ color: "grey" }}>7 ore fa • 74 lettori</small>
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
