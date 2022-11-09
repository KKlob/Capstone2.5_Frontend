import React, { useContext } from 'react';
import MemberInfo from './MemberInfo';
import Loading from './Loading';
import { v4 as uuid } from 'uuid';
import { SubsContext } from '../../Utilities/ContextCreator';

function SubbedMembers() {

    const { subs } = useContext(SubsContext);

    console.log(subs);

    return (
        <div id="SubbedMembersContainer">
            {subs ? subs.map(member => <MemberInfo data={member} key={uuid()} />) : <Loading />}
        </div>
    )
}

export default SubbedMembers;