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
      if (user !== null) {
        // console.log(user.uid)
        setUserId(user.uid);
        setUserMail(user.email);

        setUserPath(user.uid)
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
          <Route path='/user' element={!isSignedIn ? <Navigate to={""} /> : <User signInUser={signInUser}/>} />
          <Route path='/reset' element={<ResetPassword />} />
          <Route path='/forgot' element={<ForgotPassowrd />} />
          <Route path='' element={<LandingPage />} />
          <Route path='/verification' element={<VerificationPage />} />
          <Route path='/verify-email' element={<VerifyEmail />} />
        </Routes>
      </BrowserRouter>

      {/* <CourseCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} video={video1} cardFunction={testing}/> */}

      {/* <CourseContCard courseName={"Course Name"} courseType={"Free"} shortDescrip={short} image={image1} cardFunction={testing}/> */}

      {/* <SearchBar/> */}

      {/*  */}
    </>
  );
}

export default App;
