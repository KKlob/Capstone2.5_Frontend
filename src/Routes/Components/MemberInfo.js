import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SubsContext, UserContext } from '../../Utilities/ContextCreator';
import API_Routes from '../../Utilities/apiRoutes';
import axios from 'axios';
import './MemberInfo.css';

function MemberInfo({ data }) {

    const path = useLocation().pathname;

    const { subs, setSubs } = useContext(SubsContext);
    const token = useContext(UserContext);

    function addSub(memberId, memberObj) {
        async function addSubToDB() {
            const url = API_Routes.baseURL + API_Routes.user.addSub;
            const resp = await axios({
                method: 'post',
                url,
                data: { token, memberId }
            });
            if (resp.error) {
                console.log("Error adding sub on backend", resp);
            } else {
                console.log(resp);
                setSubs([...subs, memberObj])
            }
        }
        addSubToDB();
    }

    function removeSub(memberId, memberObj) {
        async function removeSubFromDB() {
            const url = API_Routes.baseURL + API_Routes.user.removeSub;
            const resp = await axios({
                method: 'delete',
                url,
                data: { token, memberId }
            });
            if (resp.error) {
                console.log("Error removing sub on backend", resp);
            } else {
                let index = subs.indexOf(memberObj);
                subs.splice(index, 1);
                console.log(resp);
                setSubs([...subs]);
            }
        }
        removeSubFromDB();
    }

    function checkIfSub(member) {
        if (subs.indexOf(member) === -1) {
            return false;
        } else {
            return true;
        }
    }

    const party = () => {
        if (data.party === "R") return "Republican";
        if (data.party === "D") return "Democrat";
        if (data.party === "ID") return "Independent";
    }

    const chamber = () => {
        if (data.chamber === "Senate") return `Senator for ${data.years_served} years`;
        if (data.chamber === "House") return `House Representative for ${data.years_served} years`;
    }

    function handleRemove() {
        removeSub(data.id, data);
    }

    function handleAdd() {
        addSub(data.id, data);
    }

    return (
        <Container id="MemberInfoContainer" style={path === "/subs" ? { border: '1px solid black', borderRadius: '15px', marginTop: '10px', marginBottom: '10px' } : null}>
            <Row xs={1} md={2}>
                <Col className="memberImg" xs={7} md={6} lg={4}>
                    <Card>
                        <Card.Img src={data.photo} alt={data.first_name + " " + data.last_name} />
                        <Card.ImgOverlay />
                    </Card>
                </Col>
                <Col className="member-info-col" xs={12} md={6}>
                    <Container>
                        <Row>
                            <Col xs={8}>
                                <Card className="member-name-card">
                                    <Card.Body className="text-center">
                                        <Card.Title>{data.first_name} {data.last_name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.State.name} {party()}</Card.Subtitle>
                                        <Card.Text>
                                            {chamber()}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12}>
                                <Card className="member-socials-card">
                                    <Card.Body className="text-center">
                                        <Card.Title>Socials</Card.Title>
                                        <Card.Text>
                                            {data.socials.twitter ? <Card.Link href={data.socials.twitter}>Twitter</Card.Link> : null}
                                            {data.socials.facebook ? <Card.Link href={data.socials.facebook}>Facebook</Card.Link> : null}
                                            {data.socials.youtube ? <Card.Link href={data.socials.youtube}>Youtube</Card.Link> : null}
                                        </Card.Text>
                                        <Card.Text>
                                            {data.site ? <Card.Link href={data.site}>Government Site</Card.Link> : null}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row xs={2} className="member-data-row">
                            <Col xs={6}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>Total Votes</Card.Title>
                                        <Card.Text>{data.total_votes} votes</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>Missed Votes</Card.Title>
                                        <Card.Text>{data.missed_votes} votes</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>Bills Sponsored</Card.Title>
                                        <Card.Text>{data.bills_sponsored} Bills</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={6}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>% of Votes With Party</Card.Title>
                                        <Card.Text>{data.votes_with_party_pct}%</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="d-grid">
                                {token ?
                                    (checkIfSub(data) ? <Button onClick={handleRemove} size="lg" variant="danger">Remove Sub</Button> : <Button onClick={handleAdd} size="lg" variant="success">Add Sub</Button>) : null}
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default MemberInfo;