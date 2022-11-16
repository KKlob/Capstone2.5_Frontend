import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_Routes from '../Utilities/apiRoutes';
import MemberInfo from './Components/MemberInfo';
import Loading from './Components/Loading';
import Container from 'react-bootstrap/Container';
import './MemberDisplay.css';

function MemberDisplay() {

    // Component that holds all Member Components after a member is selected.

    let { id } = useParams();

    // creates a local memberCache that will update every time MemberDisplay is passed a member ID to load. Once a member is selected by a user, that member's info is cached and no API calls are needed if a user returns to the member during that session. Cleared on session reload
    const [memberCache, setMemberCache] = useState({});

    // stores data for user-selected member
    const [member, setMember] = useState(null);

    useEffect(() => {
        const getMemberData = async () => {
            const url = API_Routes.baseURL + API_Routes.congress.member + "/" + id;
            const resp = await axios.get(url);
            const currMember = resp.data.data;
            setMember(currMember);
            setMemberCache({ ...memberCache, [currMember.id]: currMember })
        }
        // Check if the member is in memberCache. If so, pull that member and update the member state.
        if (memberCache[id]) {
            setMember(memberCache[id]);
        } else {
            // Otherwise, hit the API and get that info.
            getMemberData();
        }
    }, [id, memberCache])

    return (
        <Container id="MemberDisplay">
            {member && (member.id === id || memberCache[id]) ? <MemberInfo data={member} /> : <Loading height={500} />}
        </Container>
    )
}

export default MemberDisplay;