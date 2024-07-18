import { useEffect, useState } from "react";
import { getPosts, newPost } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";
import HomeLeftBar from "./HomeLeftBar";
import Notizie from "./Notizie";
import HomeFooter from "./HomeFooter";

const Jobs = () => {
    const posts = useSelector((state) => state.homeReducer.posts);
    const dispatch = useDispatch();

    const [post, setpost] = useState("");

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    // console.log("posts", posts);

    const dataConverter = (timeStamp) => {
        const data = new Date(timeStamp);
        return data.toLocaleString("it-it", {
            //weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            //second: "numeric",
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(newPost(post)).then(() => {
            setpost("");
        });
    };

    return (
        <Container className="mt-4">
            {/* Dispositivi Desktop */}
            <Row className="d-none d-lg-flex">
                <Col lg={3}>
                    <HomeLeftBar />
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

                </Col>
                <Col lg={3} className="d-none d-md-block">
                    <Notizie />
                    <HomeFooter />
                </Col>
            </Row>

            {/* Dispositivi Medie dimensioni */}
            <Row className="d-none d-md-flex d-lg-none">
                <Col md={4}>
                    <HomeLeftBar />
                    <Notizie />
                    <HomeFooter />
                </Col>
                <Col md={8}>
                    <h1>Posts</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label>Aggiungi nuovo post</Form.Label>
                            <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setpost(e.target.value)} />
                        </Form.Group>
                    </Form>
                    {[...posts].reverse().map((post) => {
                        return (
                            <Card key={post._id} className="my-2">
                                <Card.Body>
                                    <Card.Title>{post.user.username}</Card.Title>
                                    <Card.Text>{post.text}</Card.Text>
                                    <Card.Text>{dataConverter(post.createdAt)}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Col>
            </Row>

            {/* Dispositivi Mobile */}
            <Row className="d-flex d-md-none">
                <Col xs={12}>
                    <HomeLeftBar />
                </Col>
                <Col xs={12}>
                    <h1>Posts</h1>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="text">
                            <Form.Label>Aggiungi nuovo post</Form.Label>
                            <Form.Control type="text" placeholder="Scrivi qualcosa" value={post} onChange={(e) => setpost(e.target.value)} />
                        </Form.Group>
                    </Form>
                    {[...posts].reverse().map((post) => {
                        return (
                            <Card key={post._id} className="my-2">
                                <Card.Body>
                                    <Card.Title>{post.user.username}</Card.Title>
                                    <Card.Text>{post.text}</Card.Text>
                                    <Card.Text>{dataConverter(post.createdAt)}</Card.Text>
                                </Card.Body>
                            </Card>
                        );
                    })}
                </Col>
                <Col xs={12}>
                    <Notizie />
                    <HomeFooter />
                </Col>
            </Row>
        </Container >
    );
};
export default Jobs;


