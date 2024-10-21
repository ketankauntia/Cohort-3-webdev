import { useEffect, useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount((count) => count + 1);
  }

  useEffect(function () {
    setInterval(increaseCount, 1000);
  }, []);

  return <div>{count}</div>;
}

export default App;
