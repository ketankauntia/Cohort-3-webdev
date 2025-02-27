import React from "react";
import "./Sidebar.css";
import { Star, PanelRight, Lock } from "lucide-react";
function Sidebar() {
  return (
    <div className="sidebar-comp bg-bgDark3 p-4 w-1/4 text-white">
      <div className="sidebar-heading mb-1 font-bold ">
        <h2 className="flex justify-between p-1 items-center">
          My Lists{" "}
          <button className="cursor-pointer px-1 rounded-md hover:bg-gray-500">
            <PanelRight className="w-5 h-5 items-center" />
          </button>
        </h2>
      </div>
      <div className="font-semibold p-1 mb-2">Created by me</div>
      <div className="sidebar-fav-list flex items-center justify-between p-2 bg-bgDarkBtn1 rounded">
        <div className="block-1 font-medium flex items-center">
          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400 mr-1 bg-white p-1 rounded-sm" />

          <span>favourite</span>
        </div>
        <Lock className="h-4 w-5" />
      </div>
    </div>
  );
}

export default Sidebar;
