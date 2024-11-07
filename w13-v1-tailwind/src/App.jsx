import "./App.css";

function App() {
  return (
    <>
      <div className="main-container  bg-blue-700 text-center">
        <div className="logo text-4xl text-white">Webinar.gg</div>
        <div className="heading text-white text-2xl font-semibold">
          Verify Your Age
        </div>
        <div className="input-block">
          <div className="txt-line text-gray-400">
            Please Confirm your birth year. This data will not be stored.
          </div>
          <input type="number text-white"></input>
          <div className="btn-comp text-white">Continue</div>
        </div>
      </div>
    </>
  );
}

export default App;
