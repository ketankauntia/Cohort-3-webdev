import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <div>
      Single Page Application using react router dom
      <br />
      <br />
      <br />
      <BrowserRouter>
        <Link to='/'>HomePage</Link>
        <span>----</span>
        <Link to='/neet/class11'>Class11</Link>
        <span>----</span>
        <Link to='/neet/class12'>Class12</Link>
        <span>----</span>
        <Routes>
          <Route path='/neet/class11' element={<Class11 />} />
          <Route path='/neet/class12' element={<Class12 />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return <div>Home Page.</div>;
}
function Class11() {
  return <div>Class 11 prog.</div>;
}
function Class12() {
  return <div>Class 12 prog.</div>;
}

export default App;

// ##################################################

// import { useEffect, useState } from 'react';
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     // setCount(count + 1);
//     setCount(function (currentValue) {
//       // why currentValue? becuase, we need to update the total new count that has been updated..
//       return currentValue + 1;
//     });
//   }

//   useEffect(() => {
//     //this clock will be called only once..
//     setInterval(increaseCount, 1000);
//   }, []);

//   // setInterval(() => increaseCount(), 1000);

//   return (
//     <div>
//       <div>{count}</div>
//       <br />
//       {/* <button onClick={() => increaseCount()}>Increase count</button> */}
//       {/* <button onClick={increaseCount}>Increase count</button> */}
//     </div>
//   );
// }

// export default App;
