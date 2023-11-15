// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import TextFields from './Components/TextFields';
// import {TextFieldPassword} from './Components/TextFields';
// import Button from "./Components/Buttons";
import { ImageButton } from "./Components/Buttons";

function App() {
  // const [testingF, settesting] = useState("");
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

  const [imageStatus, setImageStatus] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);

  function handleImage(event) {
    const file = event.target.files[0];
    // var image = document.getElementById('image');
    setImageSrc(URL.createObjectURL(event.target.files[0]));
    setImageStatus(true);
    console.log(file.name);
  }

  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>

      {/* <TextFields label={"Email Address:"} errorStatus={er} errorMessage={"Field Required!"} setState={settesting} /> */}
      {/* <TextFieldPassword label={"Password:"} errorStatus={er2} errorMessage={"Field Required!"} setState={settestingP} /> */}
      {/* <Button text={"Sign In"} buttonFunction={testing} /> */}

      <ImageButton handleImage={handleImage} imageSrc={imageSrc} />
    </div>
  );
}

export default App;
