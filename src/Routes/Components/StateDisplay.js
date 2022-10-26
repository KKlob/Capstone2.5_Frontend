import React, { useEffect, useState } from 'react'
import { v4 as uuid } from 'uuid';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import StateButton from './StateButton';
import MemberButton from './MemberButton';
import axios from 'axios';
import API_Routes from '../../Utilities/apiRoutes';
import Loading from './Loading';

function StateDisplay() {

    const [states, setStates] = useState(null);

    const [display, setDisplay] = useState({ page: 'statesDisplay' });

    const [stateMembers, setStateMembers] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(API_Routes.baseURL + API_Routes.congress.states);
            setStates(resp.data);
        }
        fetchData();
    }, []);

    useEffect(() => {
        async function getStateMembers() {
            const resp = await axios.get(API_Routes.baseURL + API_Routes.congress.states + "/" + display.code);
            setStateMembers(resp.data.data);
        }
        if (display.page === "state") {
            getStateMembers();
        }
    }, [display])

    if (states && display.page === "statesDisplay") {
        return (
            <Row id="statesDisplay" className="justify-content-center">
                <Col xs={12}>This is the State Display</Col>
                {states.map(state => <Col key={uuid()}><StateButton state={state} setDisplay={setDisplay} key={uuid()} /></Col>)}
            </Row>
        )
    } else if (stateMembers && display.page === "state") {
        return (
            <Row id="stateMemberDisplay" className="justify-content-center">
                <Col xs={12}>This is the State Member Display</Col>
                {stateMembers.map(member => <Col key={uuid()}><MemberButton member={member} /></Col>)}
            </Row>
        )
    } else {
        return (
            <Loading />
        )
    }



}

export default StateDisplay;