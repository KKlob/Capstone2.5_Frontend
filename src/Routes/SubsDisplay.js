import React, { useContext } from 'react';
import { UserContext } from '../Utilities/ContextCreator';
import SubbedMembers from './Components/SubbedMembers';
import * as jose from 'jose';


function SubsDisplay() {

    const token = useContext(UserContext);

    let user;
    token ? user = jose.decodeJwt(token) : user = null;

    console.log("user is :", user);

    return (
        <div id="SubsDisplay">
            <p>This is the subs page for {user.username}</p>

            <SubbedMembers />
        </div>
    )
}

export default SubsDisplay;