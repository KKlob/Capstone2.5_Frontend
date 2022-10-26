import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Test1 from './Routes/test1';
import Test2 from './Routes/test2';
import NotFound from './Routes/notFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="test1" element={<Test1 />} />
          <Route path='test2' element={<Test2 />} />
        </Route>
        {/* Add Catch-All Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
