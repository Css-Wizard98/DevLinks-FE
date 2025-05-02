import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './login/login';
import SignUp from './login/signup';
import HomePage from './app/HomePage';

const PageRoute = () => {  
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/app" element={isAuthenticated ? <div>App Page</div> : <Navigate to="/login" />} />
        <Route path="/login" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={isAuthenticated ? <Navigate to="/app" /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoute;