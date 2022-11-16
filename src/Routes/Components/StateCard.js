import React from 'react';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './StateCard.css';

function StateCard({ state, handleClick }) {
    // Componet building the StateCard. passed all state data. Does not perform API calls

    // handle base styling for the card based on state info.
    let style;
    if (state.partys.D > state.partys.R && state.partys.D > state.partys.ID) style = { backgroundColor: '#71a9c9' };
    if (state.partys.R > state.partys.D && state.partys.R > state.partys.ID) style = { backgroundColor: '#ed7d79' };
    if (state.partys.ID > state.partys.D && state.partys.ID > state.partys.R) style = { backgroundColor: '#83c98a' };
    if (state.partys.D === state.partys.R) style = { backgroundColor: '#b372b0' };

    return (
        <Col xs={12} md={4} lg={3} xl={2} className="StateCard">
            <Card style={{ ...style }}>
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