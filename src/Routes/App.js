import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from './notFound';
import Homepage from './Homepage';
import MemberDisplay from './MemberDisplay';
import NavBar from './Components/NavBar';

function App() {

  return (

    <div id="AppContainer">
      {/* 
      AppContainer is not part of the routing. Base container for app
      */}

      {/* NavBar should be in every location.*/}

      <BrowserRouter>
        <NavBar />
        <Routes>
          {/* Ini of app brings to "/" route, showing only NavBar and CongressDisplay*/}
          <Route path="/" element={<Homepage />}>
            {/* Once a member is selected, that links to "/member/:id". Once a member is selected, MemberDisplay will show up, pulling the id out of the url. Until we are requesting a Subs/Login/Logout/Signup Route, the url will not change until a new member is selected. */}
            <Route path="/member/:id" element={<MemberDisplay />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter >
    </div>
  );
}

export default App;
