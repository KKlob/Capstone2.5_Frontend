import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { SubsContext, UserContext } from '../../Utilities/ContextCreator';
import API_Routes from '../../Utilities/apiRoutes';
import axios from 'axios';

function MemberInfo({ data }) {

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
        <Container style={{ height: '500px' }}>
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Img src={data.photo} alt={data.first_name + " " + data.last_name} style={{ height: '100%', maxHeight: '500px', width: 'auto', objectFit: 'cover' }} />
                    </Card>
                </Col>
                <Col xs={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{data.first_name} {data.last_name}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{data.State.name} {party()}</Card.Subtitle>
                            <Card.Text>
                                {chamber()}
                            </Card.Text>
                            <Card.Text>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            {token ?
                <Row className="justify-content-center">
                    <Col xs={4}>
                        {checkIfSub(data) ? <Button onClick={handleRemove}>Remove Sub</Button> : <Button onClick={handleAdd}>Add Sub</Button>}
                    </Col>
                </Row> : null
            }
        </Container>
    )
}

export default MemberInfo;