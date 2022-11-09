import React, { useState } from 'react';
import States from './States';
import StateMembers from './StateMembers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function CongressDisplay() {

    // Tracking selected state, tracking what to display(States or StateMembers)

    const [state, setState] = useState(null);

    return (
        <Container id="CongressDisplay" style={{ height: '700px', marginTop: '20px', border: '1px solid black', borderRadius: '15px', padding: '10px 5px 5px 5px' }}>
            {state ? <Row className="justify-content-center">
                <Col xs={8} className="text-center d-grid">
                    <Button onClick={() => setState(null)} size="lg">Return to States</Button>
                </Col>
            </Row> : null}
            <Row className="justify-content-center" style={{ marginTop: '5px' }}>
                <Col xs={12}>
                    {/* If a state is chosen, display StateMembers, otherwise display States */}
                    {state ? <StateMembers state={state} /> : <States setState={setState} />}
                </Col>
            </Row>
        </Container>
    )
}

export default CongressDisplay;