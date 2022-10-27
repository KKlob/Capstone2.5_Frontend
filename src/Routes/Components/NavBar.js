import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';

function NavBar() {

    const location = useLocation().pathname;
    console.log(location);

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand>Who's That CongressPerson?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {/* Home Link Rules - if path has /member we want to store that
                        We want Home link back to the last member path user selected. We only redirect to "/" if user never selectes a member. Otherwise we redirect to lastMember */}
                        <Nav.Link onClick={handleClick}>Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;