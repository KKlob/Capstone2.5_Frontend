import React from 'react';
import NavBar from './NavBar';
import CongressDisplay from './Components/CongressDisplay.js';
import { Outlet, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {

  let location = useLocation().pathname;

  return (
    <div id="App">
      <Container>
        <Row>
          <Col>
            <NavBar />
          </Col>
        </Row>
        {/** Outlet will control SubPage, Login, SignUp, and MemberDisplay Routes */}
        <Row>
          <Col>
            {location !== "/signup" && location !== "/login" ? <Outlet /> : null}
            {location === "/signup" ? <Outlet /> : null}
            {location === "/login" ? <Outlet /> : null}
          </Col>
        </Row>
        <Row>
          <Col>
            {location === "/subs" || location === "/login" || location === "/signup" ? null : <CongressDisplay />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
