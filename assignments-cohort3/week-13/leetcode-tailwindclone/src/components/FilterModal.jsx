import React from "react";
import { RotateCcw } from "lucide-react";

function FilterModal({ setModalClicked }) {
  return (
    <div className="filter-modal-cont m-3 px-6 py-4 h-64 w-72 bg-bgDark3 text-white text-l font-semibold rounded-lg absolute top-20 right-140 z-50">
      <div className="modal-block-1">
        <div className="pb-2">Status</div>
        <div className="flex mb-4 justify-between">
          <div>
            <input type="checkbox" className="mr-1" />
            <span className="mr-1">Todo</span>{" "}
          </div>
          <div>
            <input className="mr-1" type="checkbox" />
            <span className="mr-1">Solved</span>{" "}
          </div>
          <div>
            <input className="mr-1" type="checkbox" />
            <span className="mr-1">Attempted</span>
          </div>
        </div>
      </div>
      <div className="modal-block-2  mb-4 ">
        <div className="pb-2">Difficulty</div>
        <div className="flex mb-3 justify-between">
          <div>
            <input className="mr-1" type="checkbox" />
            <span className="mr-1 text-green-300">Easy</span>{" "}
          </div>
          <div>
            <input className="mr-1" type="checkbox" />
            <span className="mr-1 text-yellow-300">Medium</span>{" "}
          </div>
          <div>
            <input className="mr-1" type="checkbox" />
            <span className="mr-1 text-red-400">Hard</span>
          </div>
        </div>
      </div>
      <div className="modal-block-3 mb-4">
        <input className="mr-1" type="checkbox" />
        <span>Show tags</span>
      </div>
      <button
        className="modal-block-4 flex bg-bgDarkBtn1 justify-center items-center w-full py-2 rounded-md"
        onClick={() => setModalClicked(false)}
      >
        <RotateCcw className=" h-4 mr-1 " /> Reset
      </button>
    </div>
  );
}

export default FilterModal;
