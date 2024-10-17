import { useEffect, useState } from "react";

function App() {
  return (
    <div>
      <b>Hi there</b>
      <Counter></Counter>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  //this will be logged as many times as the component is re-rendered
  console.log("re-rendering counter");

  //this will get executed only once when its mounted and will avoid itself on re-rendering's
  useEffect(function () {
    setInterval(function () {
      setCount((count) => count + 1);
    }, 1000);
    console.log("Mounted");
  }, []);

  return (
    <div>
      <h1 id="text">{count}</h1>
      <button onClick={increaseCount}>Increase Count</button>
      <button onClick={decreaseCount}>Decrease Count</button>
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
}
export default App;
