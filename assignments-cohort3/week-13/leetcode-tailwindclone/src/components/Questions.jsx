import React, { useState } from "react";
import Question from "./Question";
import { Filter, X } from "lucide-react";
import FilterModal from "./FilterModal";

function Questions() {
  const [modalClicked, setModalClicked] = useState(false);

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  function toggleModal() {
    setModalClicked(!modalClicked);
  }

  return (
    <div className="questions-controunded-md font-semibold w-3/5 m-6 flex flex-col ">
      <div className="questions-options flex items-center ml-2 mb-2">
        <button
          className="bg-white text-black px-6 py-2 rounded-full mr-4 flex items-center justify-center"
          // onClick={() => setModalClicked(true)}
          onClick={toggleModal}
        >
          <Filter className="w-4 h-4 mr-1 fill-black" />
          Filter
        </button>
        {/* Also need to render a modal on click */}
        <div className="options-container">
          <button className="px-4 py-2 rounded-full text-white flex items-center justify-center bg-bgDark2 border-slate-500 border-2">
            <div>Easy</div>{" "}
            <X className="w-4 h-4 bg-bgDarkBtn1 rounded-full ml-2" />
          </button>
        </div>
      </div>
      {modalClicked && <FilterModal setModalClicked={setModalClicked} />}
      {/* Neeeed to map the question component */}
      <div className="relative">
        {arr.map((x, index) => (
          <Question
            key={index}
            className={`${index % 2 === 0 ? "bg-bgDark2" : "bg-yellow"} ${
              x.className
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Questions;
