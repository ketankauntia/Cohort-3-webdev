import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to="/">Home</Link> <span> | </span>
        <Link to="/neet/landing-page-class-11">Class 11</Link> <span> | </span>
        <Link to="/neet/landing-page-class-12">Class 12</Link>
        <Routes>
          <Route
            path="/neet/landing-page-class-11"
            element={<Class11program />}
          />
          <Route
            path="/neet/landing-page-class-12"
            element={<Class12program />}
          />
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Landing() {
  return <div>This is the home page</div>;
}

function Class11program() {
  return <div>This is the class 11th page</div>;
}

function Class12program() {
  return <div>This is the class 12th page</div>;
}

export default App;
