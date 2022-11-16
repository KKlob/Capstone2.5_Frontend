import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NotFound from './notFound';
import Homepage from './Homepage';
import MemberDisplay from './MemberDisplay';
import SubsDisplay from './SubsDisplay';
import NavBar from './Components/NavBar';
import Form from './Form';
import { UserContext, SubsContext } from '../Utilities/ContextCreator';
import * as jose from 'jose';

function App() {

  // console.log("*****");
  // console.log("APP IS RENDERING");
  // console.log("******");

  // token holds JWT token of logged in user
  // User Context shares that object globally with all the components

  const [token, setToken] = useState(null);

  // lastMember saves the last URL visited by the user before going to the login/signup page. Home link will use this url
  const [lastMember, setLastMember] = useState("/");

  // subs saves the logged in users subs locally. If a user logs in, their subs will be saved here
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    // Any time a user logs in, the token will be decoded and the subs added to the subs state
    if (token) {
      async function decodeToken() {
        const user = await jose.decodeJwt(token);
        setSubs(user.subs);
      }
      decodeToken();
    }
  }, [token, setSubs]);

  return (

    <div id="AppContainer">
      {/* 
      AppContainer is not part of the routing. Base container for app
      */}

      {/* NavBar should be in every location.*/}

      <BrowserRouter>
        <UserContext.Provider value={token}>
          <SubsContext.Provider value={{ subs, setSubs }}>
            <NavBar setToken={setToken} setLastMember={setLastMember} lastMember={lastMember} />
            <Routes>
              {/* Ini of app brings to "/" route, showing only NavBar and CongressDisplay*/}
              <Route path="/" element={<Homepage />}>
                {/* Once a member is selected, that links to "/member/:id". Once a member is selected, MemberDisplay will show up, pulling the id out of the url. Until we are requesting a Subs/Login/Logout/Signup Route, the url will not change until a new member is selected. */}
                <Route path="/member/:id" element={<MemberDisplay />} />
                <Route path="/login" element={<Form setToken={setToken} lastMember={lastMember} />} />
                <Route path="/signup" element={<Form setToken={setToken} lastMember={lastMember} />} />
                <Route path="/subs" element={token ? <SubsDisplay lastMember={lastMember} /> : <Navigate to="/" />} />
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </SubsContext.Provider>
        </UserContext.Provider>
      </BrowserRouter >
    </div >
  );
}

export default App;