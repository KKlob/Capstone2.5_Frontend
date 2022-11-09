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
import { v4 as uuid } from 'uuid';

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
        <Container style={path === "/subs" ? { border: '1px solid black', borderRadius: '15px', marginTop: '10px', marginBottom: '10px' } : null}>
            <Row style={{ padding: '20px 5px 20px 5px' }}>
                <Col xs={4}>
                    <Card style={{ borderRadius: '15px' }}>
                        <Card.Img src={data.photo} alt={data.first_name + " " + data.last_name} style={{ height: '100%', maxHeight: '400px', width: 'auto', objectFit: 'contain', borderRadius: '15px' }} />
                        <Card.ImgOverlay />
                    </Card>
                </Col>
                <Col xs={8} style={{ marginTop: '25px' }}>
                    <Container>
                        <Row className="justify-content-center" style={{ marginTop: '10px' }}>
                            <Col xs={4}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>{data.first_name} {data.last_name}</Card.Title>
                                        <Card.Subtitle className="mb-2 text-muted">{data.State.name} {party()}</Card.Subtitle>
                                        <Card.Text>
                                            {chamber()}
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={8} style={{ marginTop: '10px' }}>
                                <Card>
                                    <Card.Body className="text-center">
                                        <Card.Title>Socials</Card.Title>
                                        {data.socials.twitter ? <Card.Link href={data.socials.twitter}>Twitter</Card.Link> : null}
                                        {data.socials.facebook ? <Card.Link href={data.socials.facebook}>Facebook</Card.Link> : null}
                                        {data.socials.youtube ? <Card.Link href={data.socials.youtube}>Youtube</Card.Link> : null}
                                        {data.site ? <Card.Link href={data.site}>Government Site</Card.Link> : null}
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            {Object.keys(data).map(key => {
                                if (["total_votes", "missed_votes", "bills_sponsored", "votes_with_party_pct"].includes(key)) {
                                    return (
                                        <Col>
                                            <Card key={uuid()}>
                                                <Card.Body>
                                                    <Card.Title>{key}</Card.Title>
                                                    <Card.Text>{data[key]}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    )
                                } else {
                                    return null
                                }
                            })}
                        </Row>
                        <Row style={{ marginTop: '20px' }}>
                            <Col xs={12} className="d-grid">
                                {token ?
                                    (checkIfSub(data) ? <Button onClick={handleRemove} size="lg">Remove Sub</Button> : <Button onClick={handleAdd} size="lg">Add Sub</Button>) : null}
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    )
}

export default MemberInfo;