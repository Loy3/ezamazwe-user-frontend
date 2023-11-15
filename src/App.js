
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ProfileSetup from './Pages/ProfileSetup';
import EditProfile from './Pages/EditProfile';


function App() {

  return (
      <Router>
          <Routes>
            {/* Client routes */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profilesetup" element={<ProfileSetup />} />
            <Route path="/editprofile" element={<EditProfile />} />
          </Routes>
      </Router>
  );
}

export default App;
