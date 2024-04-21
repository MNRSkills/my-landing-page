import { useState } from "react";

import "./App.css";
import HeaderOne from "./Components/HeaderOne";
import GridSection from "./Components/GridSection";
import Narative from "./Components/Narative";

function App() {
  const [myName, setMyName] = useState("Mack Ramirez");
  const [whatIDo, setWhatIDo] = useState("");
  const [expect, setExpectation] = useState([
    {
      cardOne: "Bring fresh ideas",
    },
    { cardTwo: "Problem solving and persistance" },
    { cardThree: "Bridge gaps finding solutions" },
    { cardFour: "Recognizing potentials in all situations" },
    {
      cardFive: "Teach as many of my colleages what I have learned",
    },
    {
      cardSix: "Playing to each team mates unique strengths",
    },
  ]);

  return (
    <>
      <HeaderOne greeting={myName} />
      <Narative nararate={whatIDo} />
      <GridSection expectations={expect} />
    </>
  );
}

export default App;
