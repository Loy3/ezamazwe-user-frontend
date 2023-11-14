
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
            <Route path="/signup" element={<SignUp />} />
          </Routes>
      </Router>
  );
}

export default App;
