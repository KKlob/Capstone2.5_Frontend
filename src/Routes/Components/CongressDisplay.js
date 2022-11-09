import React, { useState } from 'react';
import States from './States';
import StateMembers from './StateMembers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CongressDisplay() {

    // Tracking selected state, tracking what to display(States or StateMembers)

    const [state, setState] = useState(null);

    return (
        <Container id="CongressDisplay" style={{ height: '525px', marginTop: '20px', border: '1px solid black', borderRadius: '15px', padding: '10px 5px 5px 5px' }}>
            <Row className="justify-content-center">
                <Col xs={12}>
                    {/* If a state is chosen, display StateMembers, otherwise display States */}
                    {state ? <StateMembers state={state} setState={setState} /> : <States setState={setState} />}
                </Col>
            </Row>
        </Container>
    )
}

export default CongressDisplay;