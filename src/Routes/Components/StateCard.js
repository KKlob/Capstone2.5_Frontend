import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function StateCard({ state, handleClick }) {

    return (
        <Col>
            <Card style={{ width: '150px' }}>
                <Card.Body>
                    <Card.Title>{state.name}</Card.Title>
                    <Card.Link onClick={handleClick} className="stretched-link" data-code={state.code} />
                </Card.Body>
            </Card>
        </Col>
    )
}

export default StateCard;