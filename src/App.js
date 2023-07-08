import './App.css';
import { Routes, Route } from "react-router-dom";
import NotFound from "./components/not-found/Not-found";
import LoginPage from "./components/login/Login";
import ResetPassword from "./components/reset-password/Reset-password";
import SignUpPage from "./components/sign-up/Sign-up";
import Dashboard from "./components/dashboard/Dashboard";
import Home from "./components/home/Home";

// import { FaEye, FaTimes } from "react-icons/fa";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
