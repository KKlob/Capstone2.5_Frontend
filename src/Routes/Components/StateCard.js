import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function StateCard({ state, handleClick }) {

    return (
        <Col style={{ marginTop: '10px' }}>
            <Card style={{ width: '150px', height: '60px' }}>
                <Card.Body className="text-center">
                    <Card.Title style={{ fontSize: '15px', }}>{state.name}</Card.Title>
                    <Card.Link onClick={handleClick} className="stretched-link" data-code={state.code} />
                </Card.Body>
            </Card>
        </Col >
    )
}

export default StateCard;