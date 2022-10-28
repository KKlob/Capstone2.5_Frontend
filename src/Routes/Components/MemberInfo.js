import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function MemberInfo({ data }) {

    console.log(data);

    const party = () => {
        if (data.party === "R") return "Republican";
        if (data.party === "D") return "Democrat";
        if (data.party === "ID") return "Independent";
    }

    const chamber = () => {
        if (data.chamber === "Senate") return `Senator for ${data.years_served} years`;
        if (data.chamber === "House") return `House Representative for ${data.years_served} years`;
    }

    console.log(Date(data.dob));

    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <Card>
                        <Card.Img src={data.photo} alt={data.first_name + " " + data.last_name} />
                        <Card.ImgOverlay />
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
        </Container>
    )
}

export default MemberInfo;