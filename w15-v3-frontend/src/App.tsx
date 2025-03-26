import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/Dashboard";
import { SignUp } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { SharedBrainDisplay } from "./pages/SharedBrainDisplay";

function App() {
  return <BrowserRouter>
    <Routes>
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/api/v1/brain/:shareid" element={<SharedBrainDisplay />} />


    </Routes>
  </BrowserRouter>
}

export default App;
