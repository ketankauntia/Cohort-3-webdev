import { useState } from "react";

function App() {
  return <LightBulb />;
}

function LightBulb() {
  const [bulbOn, setBulbOn] = useState(true);

  return (
    <div>
      <BulbState bulbOn={bulbOn} />
      <ToggleBulbState bulbOn={bulbOn} setBulbOn={setBulbOn} />
    </div>
  );
}

function BulbState({ bulbOn }) {
  return <div>{bulbOn ? "Bulb On" : "Bulb Off"}</div>;
}

function ToggleBulbState({ setBulbOn }) {
  function toggleBulb() {
    setBulbOn((toggleState) => !toggleState);
  }

  return (
    <div>
      <button onClick={toggleBulb}>Toggle bulb state</button>
    </div>
  );
}
export default App;
