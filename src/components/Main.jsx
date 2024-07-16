import { useEffect, useState, useRef } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Image,
  Modal,
  Form,
  Dropdown,
} from "react-bootstrap";
import { CameraFill, Pencil, Plus, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  getUser,
  uploadProfilePicture,
  fetchExperiences,
  addExperience,
  deleteExperience,
} from "../redux/actions";
import AddExperienceForm from "./AddExperienceForm";

const Main = () => {
  const user = useSelector((state) => state.mainReducer.user);
  const selectedUser = useSelector((state) => state.mainReducer.selectedUser);
  const experiences = useSelector((state) => state.mainReducer.experiences);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(getUser());
    if (selectedUser) {
      dispatch(fetchExperiences(selectedUser._id));
    }
  }, [dispatch, selectedUser]);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    if (e.target.files[0]) {
      dispatch(uploadProfilePicture(user._id, e.target.files[0]));
    }
  };

  const handlePencilClick = () => {
    fileInputRef.current.click();
  };

  const handleDeleteLastExperience = () => {
    if (experiences.length > 0) {
      const lastExperienceId = experiences[experiences.length - 1]._id;
      dispatch(deleteExperience(displayUser._id, lastExperienceId));
    }
  };

  const displayUser = selectedUser || user;

  return (
    <>
      <Container>
        <Row>
          <Col md={8}>
            <Container className="position-relative">
              <Card className="mt-3">
                <Card.Img
                  variant="top"
                  src="https://media.istockphoto.com/id/1960952508/photo/dark-blue-gradient-soft-background.jpg?b=1&s=612x612&w=0&k=20&c=EBIpDSGaimw9Ci3v8nsNMC_A6kTZeiqF9EWWcf8TMkQ="
                  height={250}
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="position-absolute bg-white p-1 container-camera"
                  style={{ right: 50, top: 70 }}
                >
                  <CameraFill width={25} height={25} fill="#0A66C2" />
                </div>
                <Image
                  src={displayUser.image}
                  alt="avatar user"
                  height={150}
                  width={150}
                  className="position-absolute rounded-circle ms-4"
                  style={{
                    top: 160,
                    border: "5px solid white",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
                <Card.Body className="mt-5">
                  <Dropdown
                    className="position-absolute"
                    style={{ top: 265, right: 50 }}
                  >
                    <Dropdown.Toggle as={Pencil} width={20} height={20} />
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handlePencilClick}>
                        Carica Immagine
                      </Dropdown.Item>
                      <Form.Control
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                      />
                    </Dropdown.Menu>
                  </Dropdown>
                  <Card.Title>
                    {displayUser.name} {displayUser.surname}
                  </Card.Title>
                  <Card.Text>{displayUser.title}</Card.Text>
                  <Card.Text>
                    {displayUser.area} &middot;
                    <a
                      onClick={handleShow}
                      href="#"
                      className="fw-bold text-decoration-none ms-1"
                    >
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

              {/* esperienze */}
              <Card className="mt-3">
                <Card.Body>
                  <div className="d-flex justify-content-between me-4">
                    <Card.Title>Esperienza</Card.Title>
                    <div>
                      <Plus
                        width={35}
                        height={35}
                        className="me-2"
                        onClick={() => setShowAddExperience(true)}
                      />
                      <Pencil width={20} height={20} />
                      <Trash
                        width={20}
                        height={20}
                        className="ms-2 text-danger"
                        onClick={handleDeleteLastExperience}
                      />
                    </div>
                  </div>
                  {experiences.map((exp) => (
                    <Row key={exp._id} className="mt-2">
                      <Col xs="2">
                        <img
                          src={exp.image}
                          alt=""
                          height={30}
                          style={{ objectFit: "cover" }}
                        />
                      </Col>
                      <Col>
                        <p className="fw-bold mb-0">{exp.role}</p>
                        <small>{exp.company}</small>
                      </Col>
                    </Row>
                  ))}
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

      {/* Modale info contatto */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {displayUser.name} {displayUser.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Informazioni di contatto</h4>
          <div className="d-flex">
            <Image
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVudmVsb3BlLW1lZGl1bSIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMjR4MjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTIgNHYxM2EzIDMgMCAwMDMgM2gxNGEzIDMgMCAwMDMtM1Y0em0xOCAydjEuNDdsLTggNS4zMy04LTUuMzNWNnptLTEgMTJINWExIDEgMCAwMS0xLTFWOC42N0wxMiAxNGw4LTUuMzNWMTdhMSAxIDAgMDEtMSAxeiIvPgo8L3N2Zz4="
              width={20}
            />
            <div>
              <p className="mb-0">Email</p>
              <p> {displayUser.email}</p>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Modale aggiungi esperienza */}
      <AddExperienceForm
        show={showAddExperience}
        handleClose={() => setShowAddExperience(false)}
        userId={displayUser._id}
      />
    </>
  );
};

export default Main;
