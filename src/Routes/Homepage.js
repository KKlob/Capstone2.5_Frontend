import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CongressDisplay from './Components/CongressDisplay';
import Container from 'react-bootstrap/Container';

function Homepage() {

    const path = useLocation().pathname;

    return (
        <Container id="Homepage">
            <Outlet />

            {path.includes("subs") || path.includes("login") || path.includes("signup") ? null : <CongressDisplay />}
        </Container>
    )
}

export default Homepage;