
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ProfileSetup from './Pages/ProfileSetup';
import EditProfile from './Pages/EditProfile';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassword from './Pages/ForgotPassword';
import VerificationPage from './Pages/VerificationPage';
import VerifyEmail from './Pages/VerifyEmail';
import HomePage from './Pages/HomePage';
import Courses from './Pages/Courses';
import CourseFullView from './Pages/CourseFullView';
import CourseView from './Pages/CourseView';
import UserPage from './Pages/UserPage';


function App() {

  return (
      <Router>
          <Routes>
            {/* Client routes */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profilesetup" element={<ProfileSetup />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/verification" element={<VerificationPage />} />
            <Route path="/verifyemail" element={<VerifyEmail />} />
            <Route path="/homepage" element={<HomePage />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/coursefullview" element={<CourseFullView />} />
            <Route path="/courseview" element={<CourseView />} />
            <Route path="/userpage" element={<UserPage />} />
          </Routes>
      </Router>
  );
}


export default App; 
