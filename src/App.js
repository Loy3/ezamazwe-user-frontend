// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import SetUpProfile from './Pages/SetUpProfile';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ResetPassword from './Pages/ResetPassword';
import ForgotPassowrd from './Pages/ForgotPassowrd';
import LandingPage from './Pages/LandingPage';
import VerificationPage from './Pages/VerificationPage';
import VerifyEmail from './Pages/VerifyEmail';
import { NavBar } from './Components/NavBar';
// import TextFields from './Components/TextFields';
// import {TextFieldPassword} from './Components/TextFields';
// import Button from "./Components/Buttons";
// import { ImageButton } from "./Components/Buttons";

function App() {
  const [toProfileStatus, setToProfileStatus] = useState(false);
  // const [testingP, settestingP] = useState("");
  // const [er, seter] = useState(false);
  // const [er2, seter2] = useState(false);
  // function testing() {
  //   console.log(testingF);
  //   if (!testingF ) {
  //     seter(true)
  //   }else{
  //     seter(false)
  //   }

  //   if (!testingP ) {
  //     seter2(true)
  //   }else{
  //     seter2(false)
  //   }
  // }

  // const [imageStatus, setImageStatus] = useState(false);
  // const [imageSrc, setImageSrc] = useState(null);

  // function handleImage(event) {
  //   const file = event.target.files[0];
  //   // var image = document.getElementById('image');
  //   setImageSrc(URL.createObjectURL(event.target.files[0]));
  //   setImageStatus(true);
  //   console.log(file.name);
  // }

  return (
    // <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

    //   {/* <TextFields label={"Email Address:"} errorStatus={er} errorMessage={"Field Required!"} setState={settesting} /> */}
    //   {/* <TextFieldPassword label={"Password:"} errorStatus={er2} errorMessage={"Field Required!"} setState={settestingP} /> */}
    //   {/* <Button text={"Sign In"} buttonFunction={testing} /> */}

    //   {/* <ImageButton handleImage={handleImage} imageSrc={imageSrc} /> */}

    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route path='' element={<SignIn />} />
          <Route path='/signup' element={<SignUp setToProfileStatus={setToProfileStatus}/>} />
          <Route path='/profilesetup' element={toProfileStatus ? <SetUpProfile setToProfileStatus={setToProfileStatus}/> : <Navigate to="/signup"/> } />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/forgot' element={<ForgotPassowrd/>} />
          <Route path='/home' element={<LandingPage/>} />
          <Route path='/verification' element={<VerificationPage/>} />
          <Route path='/verify-email' element={<VerifyEmail/>} />
        </Routes>
      </BrowserRouter>

      {/* <NavBar/> */}
    </>
  );
}

export default App;
