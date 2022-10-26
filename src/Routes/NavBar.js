import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation } from 'react-router-dom';

function NavBar({ user = null }) {

    let location = useLocation();

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Who's That CongressPerson?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/">Home</Nav.Link>
                        {user ? <Nav.Link href="/subs">Subs</Nav.Link> : null}
                        {location.pathname === "/login" ? null : <Nav.Link href="/login">Login</Nav.Link>}
                        {location.pathname === "/signup" ? null : <Nav.Link href="/signup">Sign Up</Nav.Link>}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;