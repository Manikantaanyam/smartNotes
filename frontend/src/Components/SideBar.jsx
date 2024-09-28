import React from "react";

const SideBar = () => {
  return (
    <div className="h-full w-[20%] bg-black ">
      <div className="relative flex flex-col text-white pl-10 pt-16 space-y-4">
        <a href="" className="font-bold text-xl hover:text-orange-500">
          Notes
        </a>
        <Link
          to="/Aiassistant"
          className="font-bold text-xl hover:text-orange-500"
        >
          Ai Assistance
        </Link>
        <a href="" className="font-bold text-xl hover:text-orange-500">
          Logout
        </a>
      </div>
    </div>
  );
};

export default SideBar;
