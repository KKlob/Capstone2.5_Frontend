import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './notFound';
import Homepage from './Homepage';
import MemberDisplay from './MemberDisplay';
import NavBar from './Components/NavBar';
import Form from './Form';
import { UserContext } from '../Utilities/ContextCreator';

function App() {

  console.log("*****");
  console.log("APP IS RENDERING");
  console.log("******");

  // User State stores the user object if logged in
  // User Context shares that object globally with all the components

  const [token, setToken] = useState(null);
  const [lastMember, setLastMember] = useState("/");

  return (

    <div id="AppContainer">
      {/* 
      AppContainer is not part of the routing. Base container for app
      */}

      {/* NavBar should be in every location.*/}

      <BrowserRouter>
        <UserContext.Provider value={token}>
          <NavBar setToken={setToken} setLastMember={setLastMember} lastMember={lastMember} />
          <Routes>
            {/* Ini of app brings to "/" route, showing only NavBar and CongressDisplay*/}
            <Route path="/" element={<Homepage />}>
              {/* Once a member is selected, that links to "/member/:id". Once a member is selected, MemberDisplay will show up, pulling the id out of the url. Until we are requesting a Subs/Login/Logout/Signup Route, the url will not change until a new member is selected. */}
              <Route path="/member/:id" element={<MemberDisplay />} />
              <Route path="/login" element={<Form setToken={setToken} lastMember={lastMember} />} />
              <Route path="/signup" element={<Form setToken={setToken} lastMember={lastMember} />} />
              {/* <Route path="/subs" element={<SubsDisplay />} */}
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter >
    </div >
  );
}

export default App;