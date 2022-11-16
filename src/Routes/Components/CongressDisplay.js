import React, { useState } from 'react';
import States from './States';
import StateMembers from './StateMembers';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './CongressDisplay.css';

function CongressDisplay() {

    // Tracking selected state, tracking what to display(States or StateMembers)

    const [state, setState] = useState(null);

    return (
        <Container id="CongressDisplay">
            {/* If state !== null we want to show the "Return to States" button */}
            {state ? <Row className="justify-content-center">
                <Col id="rts-button" xs={8} className="text-center d-grid">
                    <Button onClick={() => setState(null)} size="lg">Return to States</Button>
                </Col>
            </Row> : null}
            <Row className="justify-content-center">
                <Col xs={12}>
                    {/* If a state is chosen, display StateMembers, otherwise display States */}
                    {state ? <StateMembers state={state} /> : <States setState={setState} />}
                </Col>
            </Row>
        </Container>
    )
}

export default CongressDisplay;