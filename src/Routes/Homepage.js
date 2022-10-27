import React from 'react';
import { Outlet } from 'react-router-dom';
import CongressDisplay from './Components/CongressDisplay';

function Homepage() {

    return (
        <div id="Homepage">
            <p>this is the home page</p>
            <Outlet />

            <CongressDisplay />
        </div>
    )
}

export default Homepage;