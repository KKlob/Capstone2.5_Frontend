import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './StateCard.css';

function StateCard({ state, handleClick }) {

    return (
        <Col xs={12} md={4} lg={3} xl={2} className="StateCard" style={{ marginTop: '10px' }}>
            <Card style={{ cursor: 'pointer' }}>
                <Card.Body className="text-center">
                    <Card.Title>{state.name}</Card.Title>
                    <Card.Subtitle>| D: {state.partys.D} | R: {state.partys.R} | I: {state.partys.ID} |</Card.Subtitle>
                    <Card.Link onClick={handleClick} className="stretched-link" data-code={state.code} />
                </Card.Body>
            </Card>
        </Col >
    )
}

export default StateCard;