import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';

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

    return (
        <div id="States">
            <p>This is the states component</p>
            <ul>
                {states ? states.map(state => <Button key={uuid()} onClick={handleClick} data-code={state.code}>{state.name}</Button>) : null}
            </ul>
        </div>
    )
}

export default States;