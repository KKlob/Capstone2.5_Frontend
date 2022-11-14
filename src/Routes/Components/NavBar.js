import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserContext } from '../../Utilities/ContextCreator';
import './NavBar.css';

function NavBar({ setToken, setLastMember, lastMember }) {

    const path = useLocation().pathname;

    const navigate = useNavigate();

    function handleHome() {
        navigate(lastMember);
    }

    function handleLogin() {
        if (path.includes("member")) setLastMember(path);
        navigate("/login")
    }

    function handleSubs() {
        if (path.includes("member")) setLastMember(path);
        navigate("/subs")
    }

    function handleSignup() {
        if (path.includes("member")) setLastMember(path);
        navigate("/signup")
    }

    function handleLogout() {
        if (path.includes("member")) setLastMember(path);
        setToken(null);
    }
    return (
        <Navbar expand="md" sticky="top">
            <Container>
                <Navbar.Brand collapseOnSelect>Who's That CongressPerson?</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        {/* Home Link Rules - if path has /member we want to store that
                        We want Home link back to the last member path user selected. We only redirect to "/" if user never selectes a member. Otherwise we redirect to lastMember */}
                        {path === "/" || path.includes("member") ? null : <Nav.Link onClick={handleHome}>Home</Nav.Link>}


                        {!(path.includes("signup")) ?
                            <UserContext.Consumer>
                                {token => {
                                    if (!token) {
                                        return (
                                            <Nav.Link onClick={handleSignup}>Sign Up</Nav.Link>
                                        )
                                    }
                                }}
                            </UserContext.Consumer> : null}

                        {/* Login Link Rules - renders if user not logged in and: 
                            - path !== /login
                        */}
                        {!(path.includes("login")) ?
                            <UserContext.Consumer>
                                {token => {
                                    if (!token) {
                                        return (
                                            <Nav.Link onClick={handleLogin}>Login</Nav.Link>
                                        )
                                    }
                                }}
                            </UserContext.Consumer> : null}

                        <UserContext.Consumer>
                            {token => {
                                if (token && path !== "/subs") {
                                    return (
                                        <Nav.Link onClick={handleSubs}>Subs</Nav.Link>
                                    )
                                }

                            }}
                        </UserContext.Consumer>
                        <UserContext.Consumer>
                            {token => {
                                if (token) {
                                    return (
                                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                                    )
                                }
                            }}
                        </UserContext.Consumer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;