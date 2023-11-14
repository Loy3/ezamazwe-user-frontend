// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import TextFields from './Components/TextFields';
import Button from "./Components/Buttons"

function App() {
  const [testingF, settesting] = useState("");
  const [er, seter] = useState(false);
  function testing() {
    console.log(testingF);
    if (!testingF) {
      seter(true)
    }else{
      seter(false)
    }
  }


  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <Button text={"Sign In"} buttonFunction={testing} />
      <TextFields label={"Email Address:"} errorStatus={er} errorMessage={"Field Required!"} setState={settesting} />
    </div>
  );
}

export default App;
