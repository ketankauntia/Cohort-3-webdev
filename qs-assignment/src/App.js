import "./App.css";
import { useState, useEffect } from "react";
import Canvas from "./components/Canvas";
import Navbar from "./components/Navbar";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const rawData = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const parsedData = await rawData.json();
      setData(parsedData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />
      {data && <Canvas data={data} />}
    </div>
  );
}

export default App;
