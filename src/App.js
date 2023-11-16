import React from 'react';
import './App.css';
// import {  Routes, Route,  BrowserRouter } from 'react-router-dom';
// import Login from './Pages/Login';
import SignUp from './Pages/SignUp'
import Profile from './Pages/Profile';

function App() {


  return (
    // <BrowserRouter >
    //   <Routes>
    //         <Route path="/login" element={Login} />
    //         <Route path="/SignUp" element={SignUp} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <Profile/>
    </>
  );
}

export default App;
