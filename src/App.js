import React from 'react';
import Home from './Routes/home';
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <Home />
      <Outlet />
    </div>
  );
}

export default App;
