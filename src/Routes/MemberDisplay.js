import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import API_Routes from '../Utilities/apiRoutes';
import MemberInfo from './Components/MemberInfo';
import Loading from './Components/Loading';

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
        <div id="MemberDisplay">
            <ul>
                {member && (member.id === id || memberCache[id]) ? <MemberInfo data={member} /> : <Loading height={500} />}
            </ul>
        </div>
    )
}

export default MemberDisplay;