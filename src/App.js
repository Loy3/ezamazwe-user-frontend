// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextFields from './Components/TextFields';
import {TextFieldPassword} from './Components/TextFields';
import Button from "./Components/Buttons";

function App() {
  const [testingF, settesting] = useState("");
  const [testingP, settestingP] = useState("");
  const [er, seter] = useState(false);
  const [er2, seter2] = useState(false);
  function testing() {
    console.log(testingF);
    if (!testingF ) {
      seter(true)
    }else{
      seter(false)
    }

    if (!testingP ) {
      seter2(true)
    }else{
      seter2(false)
    }
  }


  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      
      <TextFields label={"Email Address:"} errorStatus={er} errorMessage={"Field Required!"} setState={settesting} />
      <TextFieldPassword label={"Password:"} errorStatus={er2} errorMessage={"Field Required!"} setState={settestingP} />
      <Button text={"Sign In"} buttonFunction={testing} />
    </div>
  );
}

export default App;
