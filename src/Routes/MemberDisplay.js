import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_Routes from '../Utilities/apiRoutes';
import MemberInfo from './Components/MemberInfo';
import Loading from './Components/Loading';
import Container from 'react-bootstrap/Container';

function MemberDisplay() {

    let { id } = useParams();

    const [memberCache, setMemberCache] = useState({});

    const [member, setMember] = useState(null);

    useEffect(() => {
        const getMemberData = async () => {
            const url = API_Routes.baseURL + API_Routes.congress.member + "/" + id;
            const resp = await axios.get(url);
            const currMember = resp.data.data;
            setMember(currMember);
            setMemberCache({ ...memberCache, [currMember.id]: currMember })
        }

        if (memberCache[id]) {
            setMember(memberCache[id]);
        } else {
            getMemberData();
        }
    }, [id, memberCache])

    return (
        <Container id="MemberDisplay" style={{ height: '475px', marginTop: '10px', border: '1px solid black', borderRadius: '15px', padding: '10px 5px 5px 5px' }}>
            {member && (member.id === id || memberCache[id]) ? <MemberInfo data={member} /> : <Loading height={500} />}
        </Container>
    )
}

export default MemberDisplay;