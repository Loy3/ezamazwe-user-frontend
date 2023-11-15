
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';
import ProfileSetup from './Pages/ProfileSetup';
<<<<<<< HEAD
import EditProfile from './Pages/EditProfile';
=======
>>>>>>> 4fa7409a7cfd482c33ceee70787a73f411defb26


function App() {

  return (
      <Router>
          <Routes>
            {/* Client routes */}
            <Route path="/" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profilesetup" element={<ProfileSetup />} />
<<<<<<< HEAD
            <Route path="/editprofile" element={<EditProfile />} />
=======
>>>>>>> 4fa7409a7cfd482c33ceee70787a73f411defb26
          </Routes>
      </Router>
  );
}

export default App;
