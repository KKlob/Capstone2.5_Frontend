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

    // Component holding all MemberInfo components associated with a logged in user's subs.

    const { subs } = useContext(SubsContext);

    return (
        <Container id="SubbedMembersContainer">
            {subs.length ?
                <Row xs={1}>
                    {subs ? subs.map(member => <Col key={uuid()}><MemberInfo data={member} /></Col>) : <Col><Loading /></Col>}
                </Row>
                : // If there are subs in the subsContext - display them. Otherwise show the below message to the user
                <Row xs={1} className="justify-content-center">
                    <Col className="text-center">
                        You have no subbed members. Go to the homepage, select a State {"-->"} select a State Congressional Member to see the option to add a sub.
                    </Col>
                </Row>
            }
        </Container>
    )
}

export default SubbedMembers;