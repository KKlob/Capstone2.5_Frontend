import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';
import { useNavigate, useLocation } from 'react-router-dom';

function StateMembers({ state, setState }) {

    const navigate = useNavigate();

    const [members, setMembers] = useState(null);

    const path = useLocation().pathname;

    useEffect(() => {
        const fetchStateMembers = async () => {
            const url = API_Routes.baseURL + API_Routes.congress.states + "/" + state;
            const resp = await axios.get(url);
            setMembers(resp.data.data);
        }

        fetchStateMembers();
    }, [state])

    function handleBackToStates(evt) {
        setState(null);
    }

    function handleSelectMember(evt) {
        const memberId = evt.target.dataset.id;
        if (!path.includes(memberId)) {
            navigate(`/member/${memberId}`);
        }
    }

    return (
        <div id="StateMembers">
            <p>This is the StateMembers component</p>
            <p><Button onClick={handleBackToStates}>Back to States</Button></p>

            {members ? members.map(member => <Button key={uuid()} data-id={member.id} onClick={handleSelectMember}>{member.first_name} {member.last_name}</Button>) : null}

        </div>
    )
}

export default StateMembers;