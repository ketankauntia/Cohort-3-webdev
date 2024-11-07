import "./App.css";

function App() {
  return (
    <>
      <div className="grid grid-cols-3 sm:grid-cols-12 ">
        <div className="bg-green-700 text-white col-span-3 sm:col-span-4">
          hi there from 1st div
        </div>
        <div className="bg-red-600 text-white col-span-3 sm:col-span-4">
          hi there from 2nd div
        </div>
        <div className="bg-pink-300 text-white col-span-3 sm:col-span-4">
          hi there from 3rd div
        </div>
      </div>
    </>
  );
}

export default App;
