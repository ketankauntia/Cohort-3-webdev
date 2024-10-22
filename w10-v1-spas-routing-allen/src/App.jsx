import { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";

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
          <Route path="*" element={<ErrorPage />} />
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
  const navigate = useNavigate();

  console.log("outside useEffect");
  useEffect(function () {
    console.log("In useEffect");
    const intervalId = setInterval(function () {
      console.log("In setInterval");
      navigate("/");
    }, 5000);

    return function () {
      clearInterval(intervalId);
      console.log("Unmounted setInterval");
    };
  }, []);

  return <div>This is the class 12th page</div>;
}

function ErrorPage() {
  return <div>Error : Page doesnt exist</div>;
}

export default App;
