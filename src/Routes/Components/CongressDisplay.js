import React from 'react';
import Container from 'react-bootstrap/Container';
import StateDisplay from './StateDisplay';

function CongressDisplay() {

    return (
        <Container id="congressDisplay">
            <p>This is the Congress Display</p>
            <StateDisplay />
        </Container>
    )
}

export default CongressDisplay;