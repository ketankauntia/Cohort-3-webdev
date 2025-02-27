import React from "react";

function Question() {
  return (
    <div className="question flex justify-between py-3 px-4 rounded-xl text-white mb-1">
      <div className="question-left-block flex ml-4">
        <div className="question-check pt-1/4 mr-6">?</div>
        <div className="question-title pt-1/4">12. Random Title</div>
      </div>
      <div className="question-right-block pt-1/4 text-green-600 mr-12">
        Easy
      </div>
    </div>
  );
}

export default Question;
