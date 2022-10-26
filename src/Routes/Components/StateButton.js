import React from 'react';
import Button from 'react-bootstrap/Button';

function StateButton({ state, setDisplay }) {

    function handleClick() {
        setDisplay({ page: "state", code: state.code });
    }

    return (
        <Button onClick={handleClick}>{state.name}</Button>
    )
}

export default StateButton;