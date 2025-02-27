import React from "react";
import Favorite from "./Favorite";
import Questions from "./Questions";

function BodyCompo() {
  return (
    <div className="body-comp flex justify-center items-center w-full bg-bgDark1">
      <Favorite />
      <Questions />
    </div>
  );
}

export default BodyCompo;
