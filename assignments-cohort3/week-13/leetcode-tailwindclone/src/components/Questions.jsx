import React from "react";
import Question from "./Question";
import { Filter } from "lucide-react";

function Questions() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="questions-controunded-md font-semibold w-3/5 m-6 flex flex-col ">
      <div className="questions-options flex items-center ml-2 mb-2">
        <button className="bg-white text-black px-6 py-2 rounded-full mr-4 flex items-center justify-center">
          <Filter className="w-4 h-4 mr-1" />
          Filter
        </button>
        {/* Also need to render a modal on click */}
        <div className="options-container">
          <button className="px-6 py-2 rounded-full bg-yellow-200 ">
            Easy
            <span> x</span>
          </button>
        </div>
      </div>
      {/* Neeeed to map the question component */}
      {arr.map((x, index) => (
        <Question
          key={index}
          className={`${index % 2 === 0 ? "bg-white" : "bg-blue-100"} ${
            x.className
          }`} // ✅ This will preserve any existing className props
        />
      ))}
    </div>
  );
}

export default Questions;
