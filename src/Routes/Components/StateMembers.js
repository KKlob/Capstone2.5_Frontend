import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import Button from 'react-bootstrap/Button';
import { v4 as uuid } from 'uuid';
import { useNavigate, useLocation } from 'react-router-dom';
import MemberCard from './MemberCard';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

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
        <div id="StateMembers" style={{ overflowY: 'scroll', height: '500px' }}>
            <p>This is the StateMembers component</p>
            <p><Button onClick={handleBackToStates}>Back to States</Button></p>

            <Container id="StateMemberContainer">
                <Row>
                    {members ? members.map(member => <MemberCard key={uuid()} data-id={member.id} handleClick={handleSelectMember} member={member} />) : <Loading />}
                </Row>
            </Container>
        </div>
    )
}

export default StateMembers;