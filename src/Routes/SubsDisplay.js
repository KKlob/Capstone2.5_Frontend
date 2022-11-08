import React, { useContext } from 'react';
import { UserContext } from '../Utilities/ContextCreator';
import SubbedMembers from './Components/SubbedMembers';
import * as jose from 'jose';


function SubsDisplay() {

    const token = useContext(UserContext);

    let user;
    token ? user = jose.decodeJwt(token) : user = null;

    return (
        <div id="SubsDisplay">

            <SubbedMembers user={user} token={token} />
        </div>
    )
}

export default SubsDisplay;