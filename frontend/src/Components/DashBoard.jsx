import React from "react";
import SideBar from "./SideBar";
import DashHead from "./DashHead";
import { Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <SideBar />
      <DashHead />
    </div>
  );
};

export default DashBoard;
