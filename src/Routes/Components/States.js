import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import { v4 as uuid } from 'uuid';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StateCard from './StateCard';
import './States.css';

function States({ setState }) {

    // Component holding all StateCards.

    const [states, setStates] = useState(null);

    useEffect(() => {
        const fetchStates = async () => {
            const resp = await axios.get(API_Routes.baseURL + API_Routes.congress.states);
            setStates(resp.data);
        }
        fetchStates();
    }, [])

    // handles user selecting a StateCard - sets the parents state to the selected StateCard's code. 
    function handleClick(evt) {
        const code = evt.target.dataset.code;
        setState(code);
    }

    if (states) {
        return (
            <Container id="StateCardContainer">
                <Row xs={1} md={3} lg={4} xl={6} className="justify-content-center">
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