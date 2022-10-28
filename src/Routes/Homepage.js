import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import CongressDisplay from './Components/CongressDisplay';

function Homepage() {

    const path = useLocation().pathname;

    return (
        <div id="Homepage">
            <p>this is the home page</p>
            <Outlet />

            {path.includes("subs") || path.includes("login") || path.includes("signup") ? null : <CongressDisplay />}
        </div>
    )
}

export default Homepage;