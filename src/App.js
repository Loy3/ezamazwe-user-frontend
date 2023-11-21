import React from 'react';
import './App.css';
// import {  Routes, Route,  BrowserRouter } from 'react-router-dom';
//import Login from './Pages/Login';
// import SignUp from './Pages/SignUp'
 import Profile from './Pages/Profile';
import ForgotPassword from './Pages/ForgotPassword';
import Login from './Pages/Login';
//import Reset from './Pages/ResetPassword'

function App() {


  return (
    // <BrowserRouter >
    //   <Routes>
    //         <Route path="/login" element={Login} />
    //         <Route path="/SignUp" element={SignUp} />
     //         <Route path="/Profile" element={Profile} />
    //   </Routes>
    // </BrowserRouter>
    <>
    <Login/>
    </>
  );
}

export default App;
