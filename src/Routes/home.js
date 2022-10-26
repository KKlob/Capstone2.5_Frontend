import React from 'react';
import apiRoutes from '../apiRoutes';

const url = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

function Home() {
    return (
        <div>
            <p>this is the app</p>
            <ul>
                <li>congress routes</li>
                <ul>
                    {Object.keys(apiRoutes.congress).map(key => <li>{url}{apiRoutes.congress[key]}</li>)}
                </ul>
                <li>user routes</li>
                <ul>
                    {Object.keys(apiRoutes.user).map(key => <li>{url}{apiRoutes.user[key]}</li>)}
                </ul>
            </ul>
        </div>
    )
}

export default Home;