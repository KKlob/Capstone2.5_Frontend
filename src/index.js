import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Routes/App';
import MemberDisplay from './Routes/MemberDisplay';
import NotFound from './Routes/notFound';
import SubsPage from './Routes/SubsPage';
import LoginForm from './Routes/LoginForm';
import SignUpForm from './Routes/SignUpForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="subs" element={<SubsPage />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="signup" element={<SignUpForm />} />
          <Route path="/member/:id" element={<MemberDisplay />} />
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
