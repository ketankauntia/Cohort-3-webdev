import { useEffect, useRef, useState } from "react";
import { useFetch, usePostTitle } from "../hooks/usePostTitle.js";
import { useDebounce } from "../hooks/useDebounce.js";

function App() {
  const [inputVal, setInputVal] = useState("");
  const debouncedValue = useRef(inputVal, 200);

  function change(e) {
    setInputVal(e.target.value);
  }

  useEffect(() => {
    console.log("Expensive operation done");
  }, [debouncedValue]);

  return (
    <>
      <input type="text" onChange={change}></input>
    </>
  );
}

// function App() {
//   const { postData } = usePostTitle();

//   const [currentPost, setCurrentPost] = useState(1);
//   const { details, loading } = useFetch(
//     "https://jsonplaceholder.typicode.com/todos/" + currentPost
//   );

//   if (loading) {
//     return <div>Loading....</div>;
//   }

//   return (
//     <div>
//       <button onClick={() => setCurrentPost(1)}>Post 1</button>
//       <button onClick={() => setCurrentPost(2)}>Post 2</button>
//       <button onClick={() => setCurrentPost(3)}>Post 3</button>
//       <div>{JSON.stringify(details)}</div>;
//     </div>
//   );
// }

// import { useState } from "react";

// //custom hook
// function useCounter() {
//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     setCount((count) => count + 1);
//   }
//   return { count, increaseCount };
// }

// function App() {
//   const { count, increaseCount } = useCounter();

//   return <button onClick={increaseCount}>Increase {count}</button>;
// }

export default App;
