import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API_Routes from '../../Utilities/apiRoutes';
import { v4 as uuid } from 'uuid';
import { useNavigate, useLocation } from 'react-router-dom';
import MemberCard from './MemberCard';
import Loading from './Loading';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function StateMembers({ state }) {

    const navigate = useNavigate();

    const [members, setMembers] = useState([]);

    const path = useLocation().pathname;

    useEffect(() => {
        const fetchStateMembers = async () => {
            const url = API_Routes.baseURL + API_Routes.congress.states + "/" + state;
            const resp = await axios.get(url);
            setMembers(resp.data.data);
        }

        fetchStateMembers();
    }, [state])

    function handleSelectMember(evt) {
        const memberId = evt.target.dataset.id;
        if (!path.includes(memberId)) {
            navigate(`/member/${memberId}`);
        }
    }

    const senateMembers = members.filter(member => member.chamber === "Senate" && member.id !== "H001075");
    const houseMembers = members.filter(member => member.chamber === "House");

    return (
        members.length ? <Container id="StateMemberContainer" style={{ overflowY: 'scroll', height: '625px' }}>
            {senateMembers.length > 0 ? <Row className="justify-content-center">
                <Col xs={12} className="text-center" style={{ marginTop: '10px', marginBot: '10px' }}>
                    <h3>Senators</h3>
                </Col>
                {senateMembers.map(member => <MemberCard key={uuid()} member={member} handleClick={handleSelectMember} colSize={2} />)
                }
            </Row> : null}
            {houseMembers.length > 0 ? <Row className="justify-content-center">
                <Col xs={12} className="text-center" style={{ marginTop: '15px', marginBot: '10px' }}>
                    <h3>House Representatives</h3>
                </Col>
                {houseMembers.map(member => <MemberCard key={uuid()} member={member} handleClick={handleSelectMember} colSize={2} />)}
            </Row> : null}
        </Container> : <Loading />
    )
}

export default StateMembers;