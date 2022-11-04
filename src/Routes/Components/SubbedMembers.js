import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../Utilities/ContextCreator';
import * as jose from 'jose';
import API_Routes from '../../Utilities/apiRoutes';
import MemberInfo from './MemberInfo';
import Loading from './Loading';
import axios from 'axios';
import { v4 as uuid } from 'uuid';

function SubbedMembers() {

    const token = useContext(UserContext);
    let user;
    token ? user = jose.decodeJwt(token) : user = null;

    const [subs, setSubs] = useState(null);

    console.log(subs);

    useEffect(() => {
        async function fetchMembers() {
            const resp = await axios({
                method: 'get',
                url: API_Routes.baseURL + API_Routes.user.getSubs,
                headers: { 'X-user-token': token }
            })
            setSubs(resp.data.subs);
        }

        if (token && !subs) {
            fetchMembers();
        }
    }, [token, subs])

    return (
        <div id="SubbedMembersContainer">
            {subs ? subs.map(member => <MemberInfo data={member} key={uuid()} />) : <Loading />}
        </div>
    )
}

export default SubbedMembers;