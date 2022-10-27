import React, { useState } from 'react';
import States from './States';
import StateMembers from './StateMembers';

function CongressDisplay() {

    // Tracking selected state, tracking what to display(States or StateMembers)

    const [state, setState] = useState(null);

    return (
        <div id="CongressDisplay">
            {/* If a state is chosen, display StateMembers, otherwise display States */}
            {state ? <StateMembers state={state} setState={setState} /> : <States setState={setState} />}
        </div>
    )
}

export default CongressDisplay;