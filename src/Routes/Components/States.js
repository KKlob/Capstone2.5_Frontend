import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import { v4 as uuid } from 'uuid';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StateCard from './StateCard';

function States({ setState }) {

    const [states, setStates] = useState(null);

    useEffect(() => {
        const fetchStates = async () => {
            const resp = await axios.get(API_Routes.baseURL + API_Routes.congress.states);
            setStates(resp.data);
        }
        fetchStates();
    }, [])

    function handleClick(evt) {
        const code = evt.target.dataset.code;
        setState(code);
    }

    if (states) {
        return (
            <Container id="StateCardContainer" style={{ overflowY: 'scroll', height: '500px' }}>
                <Row>
                    {states ? states.map(state => <StateCard key={uuid()} handleClick={handleClick} state={state} />) : <Loading />}
                </Row>
            </Container>
        )
    } else {
        return (
            <Loading />
        )
    }

}

export default States;