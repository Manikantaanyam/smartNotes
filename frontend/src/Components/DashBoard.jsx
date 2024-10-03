import React from "react";
import SideBar from "./SideBar";
import DashHead from "./DashHead";

const DashBoard = () => {
  return (
    <div className="flex">
      <SideBar />
      <DashHead />
    </div>
  );
};

export default DashBoard;
