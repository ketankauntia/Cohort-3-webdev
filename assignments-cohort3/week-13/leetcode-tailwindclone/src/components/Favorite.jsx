import React from "react";
import {
  Star,
  Dot,
  Lock,
  Play,
  GitFork,
  ChevronDown,
  RotateCcw,
} from "lucide-react";

function Favorite() {
  return (
    <div className=" text-white bg-bgDark2 p-6 rounded-md w-2/5 m-6">
      <div className="favorite-block">
        <div className="level-1 mb-3">
          <Star className="h-16 w-16 fill-yellow-400 bg-white rounded-md p-1" />
        </div>
        <div className="level-2 font-medium text-4xl mb-4">Favorite</div>
        <div className="level-3 font-semibold size-4 flex items-center mb-4 ">
          <div className="mr-2">Ketan </div>
          {/* <Dot className="w-16 h-8 bg-white mr-2 fill-black" /> */}
          <div className="flex mr-1">
            <div className="pr-1">19</div> <div>questions</div>
          </div>
          <Dot />
          <div className="flex ml-2 justify-center items-center">
            <Lock className="w-5 h-5 pr-1" /> <div>private</div>{" "}
            <ChevronDown className="w-5 h-5 pl-1 pt-1" />
          </div>
        </div>
        <div className="level-4 border-b-2 border-black py-4 flex">
          <button className="bg-white rounded-full px-7 py-2 text-black flex justify-center items-center">
            <Play className="fill-black w-5 h-4 mr-1" />{" "}
            <div className="font-semibold">Practice</div>
          </button>
          <button className="bg-bgDarkBtn1 rounded-full px-2 py-2 ml-2 ">
            <GitFork className="w-6 h-5" />
          </button>
        </div>
      </div>
      <div className="progress-block ">
        <div className="progress-title flex justify-between items-center m-2 p-2 font-semibold text-l">
          Progress <RotateCcw className="w-4 h-4 " />
        </div>
        <div className="flex justify-between m-2">
          <div
            className="progress-block-1 rounded-md p-4 flex flex-col bg-bgDark3
 w-full ml-2 my-2"
          >
            Attempting
          </div>
          <div className="progress-block-2 flex flex-col">
            <div className=" rounded-md p-4 flex flex-col items-center mx-2 my-1 bg-bgDark3 mt-2 text-green-300">
              <div>Easy</div>
              <div>11/11</div>
            </div>
            <div className="rounded-md p-4 flex flex-col items-center mx-2 my-1 bg-bgDark3 text-yellow-300">
              <div>Medium</div>
              <div>21/21</div>
            </div>
            <div className=" rounded-md p-4 flex flex-col items-center mx-2 my-1 bg-bgDark3 mb-2 text-red-400">
              <div>Hard</div>
              <div>9/9</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Favorite;
