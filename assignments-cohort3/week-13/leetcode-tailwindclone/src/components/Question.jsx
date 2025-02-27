import React from "react";
import { Check } from "lucide-react";

function Question({ className }) {
  return (
    <div
      className={`question flex justify-between py-3 px-4 rounded-xl text-white mb-1 ${className}`}
    >
      <div className="question-left-block flex ml-4">
        <Check className="question-check mr-6 w-5 h-6 text-green-400 items-center justify-center" />

        <div className="question-title pt-1/4">12. Random Title</div>
      </div>
      <div className="question-right-block pt-1/4 text-green-600 mr-12">
        Easy
      </div>
    </div>
  );
}

export default Question;
