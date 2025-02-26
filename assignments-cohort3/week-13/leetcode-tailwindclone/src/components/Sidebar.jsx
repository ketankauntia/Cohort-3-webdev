import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar-comp bg-slate-600 p-4 w-1/6">
      <div className="sidebar-heading mb-1 font-bold ">
        <h2 className="flex justify-between p-1 items-center">
          My Lists{" "}
          <button className="cursor-pointer p-1  hover:bg-white">X</button>
        </h2>
      </div>
      <div className="font-semibold p-1 mb-2">Created by me</div>
      <div className="sidebar-fav-list flex items-center justify-between p-2 bg-gray-400 rounded">
        <div className="block-1 font-medium">
          <span>#</span>
          <span>favourite</span>
        </div>
        <div>#</div>
      </div>
    </div>
  );
}

export default Sidebar;
