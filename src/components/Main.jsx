import { Button, Card, Container, Row, Col, Image } from "react-bootstrap";
import { CameraFill, Pencil, Plus } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Main = () => {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <Container>
      <Row>
        <Col md={8}>
          <Container className="position-relative">
            <Card className="mt-3">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1960952508/photo/dark-blue-gradient-soft-background.jpg?b=1&s=612x612&w=0&k=20&c=EBIpDSGaimw9Ci3v8nsNMC_A6kTZeiqF9EWWcf8TMkQ="
                height={250}
              />
              <div
                className="position-absolute bg-white p-1 container-camera"
                style={{ right: 50, top: 70 }}
              >
                <CameraFill width={25} height={25} fill="#0A66C2" />
              </div>
              <Image
                src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png"
                alt="avatar user"
                height={150}
                width={150}
                className="position-absolute rounded-circle ms-4"
                style={{ top: 160, border: "5px solid white" }}
              />
              <Card.Body className="mt-5">
                <Pencil
                  width={20}
                  height={20}
                  className="position-absolute"
                  style={{ top: 265, right: 50 }}
                />
                <Card.Title>Nome</Card.Title>
                <Card.Text>Professione</Card.Text>
                <Card.Text>
                  Località &middot;
                  <a href="#" className="fw-bold text-decoration-none ms-1">
                    Informazioni di contatto
                  </a>
                </Card.Text>
                <Button variant="primary" className="rounded-pill my-1 me-2 ">
                  Disponibile per
                </Button>
                <Button
                  variant="white"
                  className="rounded-pill my-1 me-2 border-primary text-primary"
                >
                  Aggiungi sezione del profilo
                </Button>

                <Button
                  variant="white"
                  className="border-black rounded-pill my-1 me-2"
                >
                  Altro
                </Button>
              </Card.Body>
            </Card>

            {/* competenze */}
            <Card className="mt-3">
              <Card.Body>
                <div className="d-flex justify-content-between me-4">
                  <Card.Title>Competenze</Card.Title>
                  <div>
                    <Plus width={35} height={35} className="me-2" />
                    <Pencil width={20} height={20} />
                  </div>
                </div>
                <Card.Text className="fw-bold mt-2">Competenza</Card.Text>
                <Card.Text>Descrizione competenza</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <div className="d-flex justify-content-between me-4">
                  <Card.Title>Licenze e Certificazioni</Card.Title>
                  <div>
                    <Plus width={35} height={35} className="me-2" />
                    <Pencil width={20} height={20} />
                  </div>
                </div>
                <Card.Text className="fw-bold mt-2">Competenza</Card.Text>
                <Card.Text>Descrizione competenza</Card.Text>
              </Card.Body>
            </Card>
            <Card className="mt-3">
              <Card.Body>
                <div className="d-flex justify-content-between me-4">
                  <Card.Title>Formazione</Card.Title>
                  <div>
                    <Plus width={35} height={35} className="me-2" />
                    <Pencil width={20} height={20} />
                  </div>
                </div>
                <Card.Text className="fw-bold mt-2">Competenza</Card.Text>
                <Card.Text>Descrizione competenza</Card.Text>
              </Card.Body>
            </Card>
          </Container>
        </Col>
        <Col md={4}>
          <Container className="d-flex flex-column pt-3">
            <Card>
              <Card.Text className="ps-2 pt-2" as="div">
                <strong>Altri profili simili</strong>
              </Card.Text>

              <Container className="d-flex flex-column">
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://img.redbull.com/images/c_crop,x_1866,y_0,h_1866,w_2134/c_fill,w_300,h_300/q_auto:low,f_auto/redbullcom/2023/11/16/leaff7lqiomqi59y8dnm/christian-horner-oracle-red-bull-racing-garage"
                    roundedCircle
                    width="40"
                    height="40"
                    className="me-3"
                  />
                  <div>
                    <Card.Title>Christian Horner</Card.Title>
                    <Card.Text>Team Principal presso RedBull</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      + Segui
                    </Button>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://images.everyeye.it/img-notizie/il-paradosso-andrea-stella-ex-ferrari-rinascere-mclaren-v3-659274-1280x960.webp"
                    roundedCircle
                    width="40"
                    height="40"
                    className="me-3"
                  />
                  <div>
                    <Card.Title>Andrea Stella</Card.Title>
                    <Card.Text>Team Principal presso Mclaren</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      + Segui
                    </Button>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://upload.wikimedia.org/wikipedia/commons/9/92/MJXKPW_240117_SF_F1_FVasseur_Red_PR_AN_076161-1920x0_YRHUGH_%28cropped%29.jpg"
                    roundedCircle
                    width="40"
                    height="40"
                    className="me-3"
                  />
                  <div>
                    <Card.Title>Frederic Vasseur</Card.Title>
                    <Card.Text>Team Principal presso Ferrari</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      + Segui
                    </Button>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://media.licdn.com/dms/image/C4E05AQGFiHL0_gOIqQ/feedshare-thumbnail_720_1280/0/1676050677954?e=2147483647&v=beta&t=1NXJZeJhBkZTTfISMSg3UwVduVB1SmvUmgINPqz7mx4"
                    roundedCircle
                    width="40"
                    height="40"
                    className="me-3"
                  />
                  <div>
                    <Card.Title>Toto Wolff</Card.Title>
                    <Card.Text>Team Principal presso Mercedes</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      + Segui
                    </Button>
                  </div>
                </Card.Body>
                <Card.Body className="d-flex align-items-center">
                  <Image
                    src="https://img.redbull.com/images/c_fill,g_auto,w_450,h_450/q_auto:low,f_auto/redbullcom/2013/11/26/1331621993877_2/f1-adrian-newey-red-bull-racing-rb5"
                    roundedCircle
                    width="40"
                    height="40"
                    className="me-3"
                  />
                  <div>
                    <Card.Title>Adrian Newey</Card.Title>
                    <Card.Text>Unemployed</Card.Text>
                    <Button variant="outline-primary" size="sm">
                      + Segui
                    </Button>
                  </div>
                </Card.Body>
              </Container>
            </Card>
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
