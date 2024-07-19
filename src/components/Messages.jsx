import { useEffect, useState } from "react";
import { Card, Container, Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfilesAside, getUser } from "../redux/actions";

const Messages = () => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    const user = useSelector((state) => state.mainReducer.user);
    const dispatch = useDispatch();

    const profilesAside = useSelector((state) => state.asideProfiles.profiles);
    console.log(profilesAside)

    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);

    useEffect(() => {
        dispatch(fetchProfilesAside());
    }, [dispatch]);




    return (


        <div className={`fixed-bottom ${expanded ? 'expanded' : 'collapsed'}`} onClick={toggleExpand}>
            <Container className="p-0">
                <Card className=" text-start p-0" id="messages">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <Image variant="top" src={user.image} height={35} width={35} className="rounded-circle position-relative my-2 ms-2" style={{ objectFit: "cover" }} />

                            <div className="position-absolute" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="green" className="bi bi-dot" viewBox="0 0 16 16" style={{ marginTop: "23", marginRight: "90px" }}>
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                </svg>
                            </div>
                            <div style={{ fontSize: "17px", fontWeight: "600" }} className="ms-3">Messaggistica</div>
                        </div>
                        <div className="d-flex">
                            <div className="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-three-dots" viewBox="0 0 16 16">
                                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3" />
                                </svg>
                            </div>
                            <div className="me-3">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                </svg>
                            </div>
                            <div className="me-3">
                                {expanded ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-down" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M1.553 6.776a.5.5 0 0 1 .67-.223L8 9.44l5.776-2.888a.5.5 0 1 1 .448.894l-6 3a.5.5 0 0 1-.448 0l-6-3a.5.5 0 0 1-.223-.67" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-up" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.776 5.553a.5.5 0 0 1 .448 0l6 3a.5.5 0 1 1-.448.894L8 6.56 2.224 9.447a.5.5 0 1 1-.448-.894z" />
                                    </svg>

                                )}
                            </div>
                        </div>
                    </div>
                    {expanded && (
                        <div className="message-content mt-2">
                            {[...profilesAside].slice(379, 385)
                                .map((profile) => (
                                    <div key={profile._id} className="profile-item">
                                        <div className="d-flex my-4 align-items-center">
                                            <Image src={profile.image} roundedCircle height={35} width={35} className="me-2" style={{ objectFit: 'cover' }} />
                                            <div className="d-flex flex-column">

                                                <div>
                                                    <div style={{ fontWeight: "600" }}>{profile.name} {profile.surname}</div>

                                                </div>
                                                <div className="message-text border-bottom pb-2" style={{ fontSize: "14px" }}>{profile.bio}</div>
                                            </div>

                                        </div>
                                    </div>
                                ))}
                        </div>
                    )}
                </Card>
            </Container>
        </div >

    );
};

export default Messages;
