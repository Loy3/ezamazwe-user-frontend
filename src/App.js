
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';


function App() {

  return (
      <Router>
          <Routes>
            {/* Client routes */}
            <Route path="/" element={<SignIn />} />
<<<<<<< HEAD
            {/* <Route path="/signup" element={<SignUp />} /> */}
=======
            <Route path="/signup" element={<SignUp />} />
>>>>>>> 2e6dc305693abdf09d9a875d1f3c2c1ec4950d38
          </Routes>
      </Router>
  );
}

export default App;
