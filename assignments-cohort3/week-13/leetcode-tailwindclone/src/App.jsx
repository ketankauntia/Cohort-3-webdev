import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import BodyCompo from "./components/BodyCompo";

function App() {
  const [sidebarOpen, isSidebarOpen] = useState(true);

  return (
    <>
      <div className="flex h-screen">
        {/* <FilterModal /> */}
        {sidebarOpen && (
          <Sidebar isSidebarOpen={isSidebarOpen} sidebarOpen={sidebarOpen} />
        )}
        {!sidebarOpen && (
          <Sidebar isSidebarOpen={isSidebarOpen} sidebarOpen={sidebarOpen} />
        )}
        <BodyCompo />
      </div>
    </>
  );
}

export default App;
