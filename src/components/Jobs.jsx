import { useEffect, useMemo } from "react";
import { fetchJobs } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";
import JobsLeftBar from "./JobsLeftBar";
const jobs = [];


const Jobs = () => {
    const job = useSelector((state) => state.jobsReducer.jobs);


    // type of Object
    if (job && !Array.isArray(job))
        jobs.push(job);
    console.log(jobs)
    // [
    //     { company: "Olla", jobs: [] },
    //     { company: "CYOS Solutions", jobs: [] },
    //     { company: "InnovateInc", jobs: [] },
    //     //...
    // ]
    const dispatch = useDispatch();

    const companies = useMemo(() => ["Olla", "CYOS Solutions", "Antidote"], []);





    useEffect(() => {
        companies.forEach(company => {
            dispatch(fetchJobs(company));
        });
    }, [dispatch, companies]);


    // useEffect(() => {
    //     dispatch(getPosts());
    // }, [dispatch]);

    // useEffect(() => {
    //     // estrae tutti gli annunci da jobs e crea un array di oggetti unici
    //     let allJobs = [];
    //     companies.forEach(company => {
    //         if (jobs[company]) {
    //             allJobs.push(...jobs[company]);
    //         }
    //     });
    //     setAnnuncio(allJobs);
    // }, [companies, jobs]);



    const selectedJob = useSelector((state) => state.mainReducer.selectedJob);

    const showCard = selectedJob && selectedJob._id;




    return (
        <>

            <Container className="mt-4">
                {/* Dispositivi Desktop */}
                <Row className="d-none d-lg-flex">
                    <Col lg={3}>
                        <JobsLeftBar />
                    </Col>
                    <Col lg={6}>


                        <Card className="my-2">
                            <Card.Body>

                                <div className="d-flex justify-content-between">
                                    <Card.Title>Ricerche di offerte di lavoro suggerite</Card.Title>
                                    <div>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                        </svg>
                                    </div>
                                </div>

                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    marketing manager</Button >
                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    hr</Button >
                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    UX/UI designer</Button >
                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    Frontend developer</Button >
                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    data analyst</Button >
                                <Button className="button-jobs rounded-pill bg-white me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="me-1 mb-1 bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                    </svg>
                                    backend developer</Button>

                                <Card.Text> </Card.Text>
                                <Card.Text> </Card.Text>
                            </Card.Body>
                        </Card>


                        <div>
                            {showCard && (
                                <Card>
                                    <div className="pb-4">
                                        <h5 className="ms-3 my-3">Dettagli offerta di lavoro per {selectedJob.company_name}</h5>
                                        <div style={{ fontSize: "16px", fontWeight: "600", color: "#0A66C2" }} className="mb-1 ms-3">{selectedJob.title}</div>
                                        <div className="ms-3 my-2" style={{ fontSize: "14px" }}>{selectedJob.company_name}</div>
                                        <div className="my-1 ms-3" style={{ fontSize: "13px", color: "grey" }}>{selectedJob.candidate_required_location} ({selectedJob.job_type})</div>
                                        <div className="ms-3 my-2" style={{ fontSize: "14px" }}>Category:  {selectedJob.category}</div>

                                        <div className="ms-3 my-3" style={{ fontSize: "14px" }} dangerouslySetInnerHTML={{ __html: selectedJob.description }} />
                                        <a href={selectedJob.url} className="pb-3 ms-3" style={{ color: "#0A66C2", marginBottom: "10", textDecoration: "none" }}>Click here to find out more</a>
                                    </div>

                                </Card>
                            )}
                        </div>



                        <div>
                            {jobs.map(job => (
                                <Card key={job.company} className="my-3">
                                    <h5 className="ms-3 mt-3">Offerte di lavoro per {job.company}</h5>
                                    <div className="ms-3 mt-1" style={{ color: "grey", fontSize: "14px" }}>Esplora le offerte di lavoro rilevanti nella tua rete</div>
                                    {job.jobs?.map(j => (

                                        <div key={j._id} className="d-flex justify-content-between border-bottom">
                                            <div className="ms-3 mt-2 ">
                                                <div style={{ fontSize: "16px", fontWeight: "600", color: "#0A66C2" }} className="mb-1">{j.title}</div>
                                                <div style={{ fontSize: "14px" }}>{j.company_name}</div>
                                                <div className="my-1  pb-4" style={{ fontSize: "13px", color: "grey" }}>{j.candidate_required_location} ({j.job_type})</div>
                                            </div>
                                            <div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg me-4 mt-4" viewBox="0 0 16 16">
                                                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                                            </svg></div>

                                        </div>


                                    ))}

                                </Card>


                            ))}

                        </div>



                    </Col>
                    <Col lg={3} className="d-none d-md-block">

                        <HomeFooter />
                    </Col>
                </Row>

                {/* Dispositivi Medie dimensioni */}
                <Row className="d-none d-md-flex d-lg-none">
                    <Col md={4}>
                        <JobsLeftBar />

                        <HomeFooter />
                    </Col>
                    <Col md={8}>

                    </Col>
                </Row>

                {/* Dispositivi Mobile */}
                <Row className="d-flex d-md-none">
                    <Col xs={12}>
                        <HomeLeftBar />
                    </Col>
                    <Col xs={12}>

                    </Col>
                    <Col xs={12}>
                        <Notizie />
                        <HomeFooter />
                    </Col>
                </Row>
            </Container >
        </>
    );
};
export default Jobs;


