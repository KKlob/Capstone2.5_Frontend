import React from 'react';
import Button from 'react-bootstrap/Button';

function MemberButton({ member }) {
    return (
        <Button>{member.first_name} {member.last_name}</Button>
    )
}

export default MemberButton;