import { Card, Button, Container } from "react-bootstrap";


const JobsLeftBar = () => {

    return (
        <Container>
            <Card className="mb-3" >
                <div className="d-flex my-3">
                    <div className="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="c##404040" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
                        </svg>
                    </div>
                    <div className="jobs-text">Le mie offerte di lavoro</div>
                </div>

                <div className="d-flex">
                    <div className="mx-3 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#404040" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M7 4a2 2 0 11-2-2 2 2 0 012 2zm2-1v2h12V3zm-4 7a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9zm-4 5a2 2 0 102 2 2 2 0 00-2-2zm4 3h12v-2H9z"></path>
                        </svg>
                    </div>
                    <div className="jobs-text">Preferenze</div>
                </div>

                <div className="d-flex mb-3">
                    <div className="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="#404040" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M14.73 10H17l-5.5 8L8 14.5l1.34-1.34L11.21 15zM20 3v16a3 3 0 01-3 3H7a3 3 0 01-3-3V3h5.69l.52-1A2 2 0 0112 1a2 2 0 011.76 1l.52 1zm-2 2h-2.6l.6 1.1V7H8v-.9L8.6 5H6v14a1 1 0 001 1h10a1 1 0 001-1z"></path>
                        </svg>
                    </div>
                    <div className="jobs-text">Valutazioni delle competenze</div>
                </div>

                <div className="d-flex mb-3">
                    <div className="mx-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="curren#404040tColor" className="mercado-match" width="24" height="24" focusable="false">
                            <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
                        </svg>
                    </div>
                    <div className="jobs-text">Indicazioni per chi cerca lavoro</div>
                </div>
            </Card>
            <Button className="button-offer bg-white d-flex align-items-center">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="me-2 bi bi-pencil-square" viewBox="0 0 16 16">
                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                        <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                    </svg>
                </div>
                <div>Pubblica offerta gratuita</div>
            </Button>
        </Container>
    )
}

export default JobsLeftBar;