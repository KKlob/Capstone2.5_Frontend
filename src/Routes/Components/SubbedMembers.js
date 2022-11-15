import React, { useContext } from 'react';
import MemberInfo from './MemberInfo';
import Loading from './Loading';
import { v4 as uuid } from 'uuid';
import { SubsContext } from '../../Utilities/ContextCreator';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './SubbedMembers.css';

function SubbedMembers() {

    const { subs } = useContext(SubsContext);

    // console.log(subs);

    return (
        <Container id="SubbedMembersContainer">
            {subs.length ?
                <Row xs={1}>
                    {subs ? subs.map(member => <Col><MemberInfo data={member} key={uuid()} /></Col>) : <Col><Loading /></Col>}
                </Row>
                :
                <Row xs={1} className="justify-content-center">
                    <Col className="text-center">
                        You have no subbed members. Go to the homepage, select a State --> select a State Congressional Member to see the option to add a sub.
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default SubbedMembers;