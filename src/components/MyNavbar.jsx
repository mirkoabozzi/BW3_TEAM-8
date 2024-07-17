import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Container,
  Form,
  Image,
  Navbar,
  NavDropdown,
  ListGroup,
} from "react-bootstrap";
import { searchProfiles, setSelectedUser } from "../redux/actions";

const MyNavbar = () => {
  const [query, setQuery] = useState("");
  const profiles = useSelector((state) => state.mainReducer.profiles);
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    setQuery(e.target.value);
    if (e.target.value.trim() !== "") {
      dispatch(searchProfiles(e.target.value));
    }
  };

  const handleProfileSelect = (profile) => {
    dispatch(setSelectedUser(profile));
    setQuery("");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          data-supported-dps="24x24"
          fill="currentColor"
          className="mercado-match"
          width="24"
          height="24"
          focusable="false"
        >
          <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
        </svg>

        <Form className="d-flex position-relative">
          <Form.Control
            type="search"
            placeholder="Cerca"
            className="me-2"
            aria-label="Search"
            value={query}
            onChange={handleSearch}
          />
          {profiles.length > 0 && query.trim() !== "" && (
            <ListGroup
              className="position-absolute"
              style={{ zIndex: 1000, width: "100%" }}
            >
              {profiles.map((profile) => (
                <ListGroup.Item
                  key={profile._id}
                  action
                  onClick={() => handleProfileSelect(profile)}
                >
                  <Image
                    src={profile.image}
                    roundedCircle
                    width="30"
                    height="30"
                    className="me-2"
                  />
                  {profile.name} {profile.surname}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Form>

        <div className="d-flex flex-column align-items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            className="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
          </svg>
          <p>Home</p>
        </div>

        <div className="d-flex align-items-center justify-content-center flex-wrap icon-nav">
          <div className="d-flex flex-column align-items-center mx-5 mt-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match icon-nav" width="24" height="24" focusable="false">
              <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
            </svg>
            <p>Home</p>
          </div>

          <div className="d-flex flex-column align-items-center mx-5 mt-2 icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match icon-nav" width="24" height="24" focusable="false">
              <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
            </svg>
            <p>Rete</p>
          </div>

          <div className="d-flex flex-column align-items-center mx-5 mt-2 icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match icon-nav" width="24" height="24" focusable="false">
              <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
            </svg>
            <p>Lavoro</p>
          </div>

          <div className="d-flex flex-column align-items-center mx-5 mt-2 icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match icon-nav" width="24" height="24" focusable="false">
              <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
            </svg>
            <p>Messaggi</p>
          </div>

          <div className="d-flex flex-column align-items-center mx-5 mt-2 icon-nav">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#666666" className="mercado-match icon-nav" width="24" height="24" focusable="false">
              <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
            </svg>
            <p>Notifiche</p>
          </div>
        </div>

        <div className="d-flex flex-column align-items-center mx-5">
          <div>
            <Image fluid src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png" alt="Profile image" width={40} className="rounded-circle" />
          </div>
          <NavDropdown title="Tu" id="navbarScrollingDropdown" drop="down" align="end">
            <div className="d-flex">
              <div>
                <Image fluid src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png" alt="Profile image" />
              </div>
              <div>
                <NavDropdown.Item href="#action3" className="fw-bold">
                  Nome
                </NavDropdown.Item>
                <NavDropdown.Item href="#action3">Professione</NavDropdown.Item>
              </div>
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                <p>Rete</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                <p>Lavoro</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>
                <p>Messaggi</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="currentColor"
                  className="mercado-match"
                  width="24"
                  height="24"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>
                <p>Notifiche</p>
              </div>
              <div className="d-flex flex-column align-items-center">
                <div>
                  <Image
                    className="rounded-circle"
                    fluid
                    src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png"
                    alt="Profile image"
                    width={40}
                  />
                </div>
                <NavDropdown
                  title="Tu"
                  id="navbarScrollingDropdown"
                  drop="down"
                  align="end"
                >
                  <div className="d-flex">
                    <div>
                      <Image
                        className="rounded-circle"
                        fluid
                        src="https://www.tenforums.com/attachments/user-accounts-family-safety/322690d1615743307-user-account-image-log-user.png"
                        alt="Profile image"
                      />
                    </div>
                    <div>
                      <NavDropdown.Item href="#action3" className="fw-bold">
                        Nome
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action3">Professione</NavDropdown.Item>
                    </div>
                  </div>
                  <Button variant="white border rounded-pill">
                    Viusalizza Profilo
                  </Button>
                  <NavDropdown.Item href="#action3" className="fw-bold">
                    Account
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Impostazioni</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5" className="fw-bold">
                    Gestisci
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5">
                    Post e Atttività
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">Esci</NavDropdown.Item>
                </NavDropdown>
              </div>
            </div>
          </NavDropdown>
        </div>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
