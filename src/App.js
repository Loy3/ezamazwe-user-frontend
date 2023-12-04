// import logo from './logo.svg';
import { useEffect, useState } from 'react';
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
import { FooterComp } from './Components/Footer';
import { FilterButton } from './Components/Buttons';
import { Accordians } from './Components/Accordians';
import { CourseCard, CourseContCard } from './Components/Cards';
// import TextFields from './Components/TextFields';
// import {TextFieldPassword} from './Components/TextFields';
// import Button from "./Components/Buttons";
// import { ImageButton } from "./Components/Buttons";
import video1 from "./Assets/Videos/video.mp4";
import image1 from "./Assets/Images/cardsImages/caps1.jpg"
import { SearchBar } from './Components/SearchBar';
import ScreenView from './Pages/ScreenView';
import CoursesPage from './Pages/CoursesPage';
import ViewCoursePage from './Pages/ViewCoursePage';
import User from './Pages/User';
import { auth, db } from './Services/firebaseConfig';
import { collection, doc, getDoc, query } from 'firebase/firestore';
import CourseFullView from './Pages/CourseFullView';
import ContactUs from './Pages/ContactUs';
import AboutUs from './Pages/AboutUs';
import Payment from './Pages/Payment';
function App() {
  const [isSignedIn, setSignIn] = useState(false);
  const [userId, setUserId] = useState("");
  const [userMail, setUserMail] = useState("");
  const [mypath, setPath] = useState("");
  const [signInStatus, setSignInStatus] = useState(false);
  const [signInUser, setSignInUser] = useState(null)
  useEffect(() => {
    const checkAuth = (auth);
    // console.log(auth);
    const unsubscribe = checkAuth.onAuthStateChanged((user) => {
      console.log(user);
      if (user !== null) {
        console.log("user.uid",user.uid)
        setUserId(user.uid);
        setUserMail(user.email);

        setUserPath(user.uid)
      } else {
        setSignIn(false);
      }
    });
    return () => unsubscribe();
  }, []);

  async function setUserPath(docId) {
    const docRef = doc(collection(db, "users"), docId);
    const docSnap = await getDoc(docRef);
    // console.log(docId);
    if (docSnap.exists()) {
      // console.log("Document data:", docSnap.data());
      setSignInUser(docSnap.data());
      setSignIn(true);
    } else {
      setSignIn(false);
    }
  }
  const [toProfileStatus, setToProfileStatus] = useState(false);

  const category = ["CAPS", "IEB", "Entrepreneur"];
  const [returnType, setReturnType] = useState("");
  const short = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam gestas metus nulla, et tincidunt sapien faucibus quis.";
  useEffect(() => {
    console.log(returnType);
  }, [returnType])


  return (
    // <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

    //   {/* <TextFields label={"Email Address:"} errorStatus={er} errorMessage={"Field Required!"} setState={settesting} /> */}
    //   {/* <TextFieldPassword label={"Password:"} errorStatus={er2} errorMessage={"Field Required!"} setState={settestingP} /> */}
    //   {/* <Button text={"Sign In"} buttonFunction={testing} /> */}
    /* <Accordians label={"Category"} types={category} setReturnType={setReturnType} returnType={returnType}/> */
    //   {/* <ImageButton handleImage={handleImage} imageSrc={imageSrc} /> */}

    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp setToProfileStatus={setToProfileStatus} />} />
          <Route path='/profilesetup' element={toProfileStatus ? <SetUpProfile setToProfileStatus={setToProfileStatus} /> : <Navigate to="/signup" />} />
          <Route path='/screen' element={<ScreenView />} />
          <Route path='/courses' element={<CoursesPage />} />
          <Route path='/course' element={<ViewCoursePage />} />
          <Route path='/courseview' element={!isSignedIn ? <Navigate to="/" /> : <CourseFullView />} />
          <Route path='/user' element={!isSignedIn ? <Navigate to="/" /> : <User signInUser={signInUser} />} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/forgot' element={<ForgotPassowrd />} />
          <Route path='/contact' element={<ContactUs />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='' element={<LandingPage />} />
          <Route path='/loader' element={<VerificationPage />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>

      {/* <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing}/> */}

      {/* <CourseContCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} image={image1} cardFunction={testing}/> */}

      {/* <Payment/> */}


      {/*  */}
    </>
  );
}

export default App;



// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './App.css';
// import SignUp from './Pages/SignUp';
// import SignIn from './Pages/SignIn';
// import ProfileSetup from './Pages/ProfileSetup';
// import EditProfile from './Pages/EditProfile';
// import ResetPassword from './Pages/ResetPassword';
// import ForgotPassword from './Pages/ForgotPassword';
// import VerificationPage from './Pages/VerificationPage';
// import VerifyEmail from './Pages/VerifyEmail';
// import HomePage from './Pages/HomePage';
// import Courses from './Pages/Courses';
// import CourseFullView from './Pages/CourseFullView';
// import CourseView from './Pages/CourseView';
// import UserPage from './Pages/UserPage';
// import ContactUs from './Pages/ContactUs';
// import AboutUs from './Pages/AboutUs';
// import Payment from './Pages/Payment';

// function App() {

//   return (
//       <Router>
//           <Routes>
//             {/* Client routes */}
//             <Route path="/signin" element={<SignIn />} />
//             <Route path="/signup" element={<SignUp />} />
//             <Route path="/profilesetup" element={<ProfileSetup />} />
//             <Route path="/editprofile" element={<EditProfile />} />
//             <Route path="/resetpassword" element={<ResetPassword />} />
//             <Route path="/forgotpassword" element={<ForgotPassword />} />
//             <Route path="/verification" element={<VerificationPage />} />
//             <Route path="/verifyemail" element={<VerifyEmail />} />
//             <Route path="/" element={<HomePage />} />
//             <Route path="/courses" element={<Courses />} />
//             <Route path="/coursefullview" element={<CourseFullView />} />
//             <Route path="/courseview" element={<CourseView />} />
//             <Route path="/userpage" element={<UserPage />} />
//             <Route path="/contactus" element={<ContactUs />} />
//             <Route path="/aboutus" element={<AboutUs />} />
//             <Route path="/payment" element={<Payment />} />
//           </Routes>
//       </Router>