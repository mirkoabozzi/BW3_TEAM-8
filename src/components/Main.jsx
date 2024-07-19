import { useEffect, useState, useRef } from "react";
import { Button, Card, Container, Row, Col, Image, Modal, Form, Dropdown, ListGroup } from "react-bootstrap";
import { ArrowRight, CameraFill, Pencil, Plus, Trash } from "react-bootstrap-icons";
import { useDispatch, useSelector } from "react-redux";
import { getUser, uploadProfilePicture, fetchExperiences, deleteExperience, updateProfilePicture, fetchProfilesAside } from "../redux/actions";
import AddExperienceForm from "./AddExperienceForm";
import EditExperienceForm from "./EditExperienceForm";
import EditProfileForm from "./EditProfileForm";

const Main = () => {
  const user = useSelector((state) => state.mainReducer.user);
  const selectedUser = useSelector((state) => state.mainReducer.selectedUser);
  const experiences = useSelector((state) => state.mainReducer.experiences);
  const profilesAside = useSelector((state) => state.asideProfiles.profiles);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const [showEditExperience, setShowEditExperience] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  // const fileInputRef = useRef(null);
  const fileInputCover = useRef(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [showImgProfileModal, setShowImgProfileModal] = useState(false);
  const handleCloseImgProfileModal = () => setShowImgProfileModal(false);
  const handleShowImgProfileModal = () => setShowImgProfileModal(true);

  const [showEditProfileModal, setShowEditProfileModal] = useState(false);
  const handleCloseEditProfileModal = () => setShowEditProfileModal(false);

  useEffect(() => {
    dispatch(getUser());
    if (selectedUser) {
      dispatch(fetchExperiences(selectedUser._id));
    } else {
      dispatch(fetchExperiences(user._id));
    }
    dispatch(fetchProfilesAside());
  }, [dispatch, selectedUser, user._id]);

  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      dispatch(uploadProfilePicture(user._id, e.target.files[0]));
    }
  };
  const shuffledProfiles = profilesAside.sort(() => 0.5 - Math.random());
  const limitedProfilesAside = shuffledProfiles.slice(0, 10);

  // const handlePencilClick = () => {
  //   fileInputRef.current.click();
  // };

  const handleCameraClick = () => {
    fileInputCover.current.click();
  };

  const handleDeleteLastExperience = () => {
    if (experiences.length > 0) {
      const lastExperienceId = experiences[experiences.length - 1]._id;
      dispatch(deleteExperience(displayedUser._id, lastExperienceId));
    }
  };

  const handleShowEditExperience = (experience) => {
    setCurrentExperience(experience);
    setShowEditExperience(true);
  };

  const handleCloseEditExperience = () => {
    setShowEditExperience(false);
    setCurrentExperience(null);
  };

  const randomViews = Math.floor(Math.random() * 100) + 1;
  const randomImpressions = Math.floor(Math.random() * 150) + 1;
  const randomDays = Math.floor(Math.random() * 6) + 1;
  const randomAppear = Math.floor(Math.random() * 180) + 1;

  const displayedUser = selectedUser || user;

  const [file, setFile] = useState(null);

  const hendleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProfilePicture(user._id, file));
    handleCloseImgProfileModal();
  };

  console.log("file", file);
  return (
    <>
      <Container className="d-flex justify-content-center">
        <Row>
          <Col sm={8} md={8}>
            <Container className="position-relative">
              <Card className="mt-3 cover-img">
                <Card.Img variant="top" src={displayedUser.image} height={250} style={{ objectFit: "cover" }} />
                <div className="position-absolute bg-white p-1 container-camera" style={{ right: 50, top: 40 }}>
                  <Dropdown className="position-absolute">
                    <Dropdown.Toggle as={CameraFill} width={25} height={25} fill="#0A66C2" className="camera-icon" />
                    <Dropdown.Menu>
                      <Dropdown.Item onClick={handleCameraClick}>Carica Immagine</Dropdown.Item>
                      <Form.Control type="file" ref={fileInputCover} onChange={handleFileChange} style={{ display: "none" }} />
                    </Dropdown.Menu>
                  </Dropdown>
                  {/* <CameraFill width={25} height={25} fill="#0A66C2" className="camera-icon" /> */}
                </div>
                <Image
                  src={displayedUser.image}
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
                  onClick={handleShowImgProfileModal}
                />
                <Card.Body className="mt-5">
                  <Pencil className="position-absolute" style={{ top: 265, right: 50, cursor: "pointer" }} width={20} height={20} onClick={() => setShowEditProfileModal(true)} />
                  <Card.Title>
                    {displayedUser.name} {displayedUser.surname}
                  </Card.Title>
                  <Card.Text>{displayedUser.title}</Card.Text>
                  <Card.Text className="main-area">
                    {displayedUser.area} &middot;
                    <a onClick={handleShow} href="#" className="fw-bold text-decoration-none ms-1 text-contact-info">
                      Informazioni di contatto
                    </a>
                  </Card.Text>
                  <Button variant="primary" className="rounded-pill my-1 me-2 button-main">
                    Disponibile per
                  </Button>
                  <Button variant="white" className="rounded-pill my-1 me-2 border-primary button-main">
                    Aggiungi sezione del profilo
                  </Button>

                  <Button variant="white" className="border-black rounded-pill my-1 me-2 button-main">
                    Altro
                  </Button>
                </Card.Body>
              </Card>

              {/* analytics */}
              <Card className="mt-3">
                <Card.Body>
                  <div className="d-flex justify-content-between me-4">
                    <Card.Title>Analisi</Card.Title>
                  </div>
                  <Card.Text style={{ color: "grey", fontSize: "13px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="grey" className="mercado-match me-1" width="16" height="16" focusable="false">
                      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                    Solo per te
                  </Card.Text>
                  <div className="d-flex flex-analytics mb-4">
                    <div className="d-flex me-4 analisi-dati">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                      </svg>
                      <div className="ms-1">
                        <div className="analytics-title">{randomViews} visualizzazioni del profilo</div>
                        <div className="analytics-text">Scopri chi ha visitato il tuo profilo.</div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex me-4 analisi-dati">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
                        </svg>
                        <div className="ms-1">
                          <div className="analytics-title">{randomImpressions} impressioni del post</div>
                          <div className="analytics-text">Crea un post per aumentare l&apos;interesse.</div>
                          <div className="analytics-days">Ultimi {randomDays} giorni.</div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex analisi-dati">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M21.41 18.59l-5.27-5.28A6.83 6.83 0 0017 10a7 7 0 10-7 7 6.83 6.83 0 003.31-.86l5.28 5.27a2 2 0 002.82-2.82zM5 10a5 5 0 115 5 5 5 0 01-5-5z"></path>
                        </svg>
                        <div className="ms-1">
                          <div className="analytics-title">{randomAppear} comparse nei motori di ricerca</div>
                          <div className="analytics-text">Vedi quante volte compari nei motori di ricerca.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-top pt-3 text-center hover-card" style={{ fontWeight: 600 }}>
                    Mostra tutte le analisi <ArrowRight />
                    <div></div>
                  </div>
                </Card.Body>
              </Card>

              {/* risorse */}
              <Card className="mt-3">
                <Card.Body>
                  <div className=" me-4">
                    <Card.Title>Risorse</Card.Title>
                  </div>
                  <Card.Text style={{ color: "grey", fontSize: "13px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="grey" className="mercado-match me-1" width="16" height="16" focusable="false">
                      <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
                    </svg>
                    Solo per te
                  </Card.Text>
                  <div className=" mb-4">
                    <div className="d-flex ms-4 me-4">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                        <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                      </svg>
                      <div className="ms-1">
                        <div className="analytics-title">La mia rete</div>
                        <div className="analytics-text">Salva e gestisce i tuoi collegamenti e interessi.</div>
                      </div>
                    </div>

                    <div>
                      <div className="d-flex ms-4 mt-4 pt-4 border-top me-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" className="mercado-match" width="24" height="24" focusable="false">
                          <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                        </svg>
                        <div className="ms-1">
                          <div className="analytics-title">Elementi salvati</div>
                          <div className="analytics-text">Monitora le tue offerte di lavoro, i corsi e gli articoli.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border-top pt-3 text-center hover-card" style={{ fontWeight: 600 }}>
                    Mostra tutte le risorse ({randomDays}) <ArrowRight />
                    <div></div>
                  </div>
                </Card.Body>
              </Card>

              {/* competenze */}
              <Card className="mt-3">
                <Card.Body>
                  <div className="d-flex justify-content-between me-4">
                    <Card.Title>Competenze</Card.Title>
                    <div>
                      <Plus width={35} height={35} className="me-2" />
                      <Pencil width={20} height={20} className="pen-icon" />
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
                      <Plus width={35} height={35} className="me-2" onClick={() => setShowAddExperience(true)} />
                      <Trash width={20} height={20} className="ms-2 text-danger" onClick={handleDeleteLastExperience} />
                    </div>
                  </div>

                  {experiences.map((exp) => (
                    <Row key={exp._id} className="mt-2 ">
                      <Col xs="2">
                        <img src={exp.image} alt="" height={30} style={{ objectFit: "cover" }} />
                      </Col>
                      <Col>
                        <p className="fw-bold mb-0">{exp.role}</p>

                        <div>
                          <small>{exp.company}</small>
                        </div>
                        <small>
                          {new Date(exp.startDate).toLocaleDateString()} - {exp.endDate ? new Date(exp.endDate).toLocaleDateString() : "Presente"}
                        </small>
                        <div>
                          <small>{exp.area}</small>
                        </div>
                        <br />
                        <div>
                          <small>{exp.description}</small>
                        </div>
                      </Col>
                      <Col className="d-flex justify-content-end">
                        <Button variant="link" onClick={() => handleShowEditExperience(exp)}>
                          <Pencil width={20} height={20} style={{ color: "black" }} />
                        </Button>
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
                      <Pencil width={20} height={20} className="pen-icon" />
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
                      <Pencil width={20} height={20} className="pen-icon" />
                    </div>
                  </div>
                  <Card.Text className="fw-bold mt-2">Competenza</Card.Text>
                  <Card.Text>Descrizione competenza</Card.Text>
                </Card.Body>
              </Card>
            </Container>
          </Col>

          {/* aside */}
          <Col sm={4} md={4}>
            <Container className="d-flex flex-column pt-3">
              <Card className="full-width-card mb-3">
                <Container fluid className="p-0">
                  {" "}
                  {/* Utilizza fluid e p-0 per rimuovere padding */}
                  <Card.Text className="py-3 ms-4 border-bottom" as="div">
                    <div className="d-flex justify-content-between">
                      <div style={{ fontSize: "18px", fontWeight: "600" }}>Lingua del profilo </div>
                      <Pencil className="me-4" />
                    </div>
                    <div style={{ fontSize: "14px", color: "grey" }}>Italiano</div>
                  </Card.Text>
                  <Card.Text className="py-3 ms-4" as="div">
                    <div className="d-flex justify-content-between">
                      <div style={{ fontSize: "18px", fontWeight: "600" }}>Profilo pubblico e URL</div>
                      <Pencil className="me-4" />
                    </div>
                    <div style={{ fontSize: "14px", color: "grey" }}>
                      www.linkedin.com/in/{displayedUser.name}-{displayedUser.surname}-5a44422a0
                    </div>
                  </Card.Text>
                </Container>
              </Card>

              <Card className="full-width-card">
                <Container fluid className="p-0">
                  {" "}
                  {/* Utilizza fluid e p-0 per rimuovere padding */}
                  <img src="https://media.licdn.com/media/AAYQAgTPAAgAAQAAAAAAADVuOvKzTF-3RD6j-qFPqhubBQ.png" alt="see who's hiring" className="hiring-image" />
                </Container>
              </Card>

              <Card className="mt-3">
                <Card.Text className="py-3 ms-4" as="div">
                  <h5>Altri profili simili</h5>
                </Card.Text>

                <Container>
                  <Row>
                    <Col md={12}>
                      <ListGroup variant="flush">
                        {limitedProfilesAside.map((profile) => (
                          <ListGroup.Item key={profile._id}>
                            <img src={profile.image} alt="user profile" width={40} height={40} className="rounded-circle img-aside" />
                            <strong className="ms-2 name-aside">
                              {profile.name} {profile.surname}
                            </strong>
                            <p className="ms-5 job-aside" style={{ fontSize: 14, color: "grey" }}>
                              {profile.title}
                            </p>
                            <div>
                              <Button variant="white" className="rounded-pill ms-5 button-follow">
                                <Plus width={20} height={20} className="icon-plus"></Plus> Segui
                              </Button>
                            </div>
                          </ListGroup.Item>
                        ))}
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
              </Card>
            </Container>
          </Col>
        </Row>
      </Container>
      {/* Modale info contatto */}
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {displayedUser.name} {displayedUser.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Informazioni di contatto</h4>
          <p className="mb-0 fw-bold">Email:</p>
          <div className="d-flex">
            <Image
              className="me-2"
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgaWQ9ImVudmVsb3BlLW1lZGl1bSIgYXJpYS1oaWRkZW49InRydWUiIHJvbGU9Im5vbmUiIGRhdGEtc3VwcG9ydGVkLWRwcz0iMjR4MjQiIGZpbGw9ImN1cnJlbnRDb2xvciI+CiAgPHBhdGggZD0iTTIgNHYxM2EzIDMgMCAwMDMgM2gxNGEzIDMgMCAwMDMtM1Y0em0xOCAydjEuNDdsLTggNS4zMy04LTUuMzNWNnptLTEgMTJINWExIDEgMCAwMS0xLTFWOC42N0wxMiAxNGw4LTUuMzNWMTdhMSAxIDAgMDEtMSAxeiIvPgo8L3N2Zz4="
              width={20}
            />
            <p className="ms-2 pt-3"> {displayedUser.email}</p>
          </div>
          <p className="mb-0 fw-bold">Ruolo:</p>
          <div className="ms-2 pt-3"> {displayedUser.title}</div>
          <p className="mb-0 fw-bold mt-2">Description:</p>
          <div className="ms-2 pt-3"> {displayedUser.bio}</div>
          <p className="mb-0 fw-bold mt-2">Luogo:</p>
          <div className="ms-2 pt-3"> {displayedUser.area}</div>
        </Modal.Body>
      </Modal>

      {/* Modale modifica immagine profilo */}
      <Modal centered show={showImgProfileModal} onHide={handleCloseImgProfileModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {displayedUser.name} {displayedUser.surname}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="mb-0">Cambia immagine del profilo</p>
          <Form onSubmit={handleSubmit}>
            <Form.Control type="file" accept="image/png, image/gif, image/jpeg" className="my-2" onChange={hendleFileChange} />
            <Button type="submit">Invia</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* Modale modifica esperienza */}
      <EditExperienceForm show={showEditExperience} handleClose={handleCloseEditExperience} experience={currentExperience} userId={displayedUser._id} />

      {/* Modale aggiungi esperienza */}
      <AddExperienceForm show={showAddExperience} handleClose={() => setShowAddExperience(false)} userId={displayedUser._id} />
      {/* Modale modifica profilo */}
      <EditProfileForm show={showEditProfileModal} handleClose={handleCloseEditProfileModal} />
    </>
  );
};

export default Main;
