import React from "react";
import { Link } from "react-router-dom";

const CreateButton = () => {
  return (
    <div className="absolute right-8 bottom-8">
      <Link to={"/dashboard/note"}>
        <button className="w-14 h-14 flex items-center justify-center cursor-pointer  rounded-full  bg-blue-700 font-bold text-white text-4xl hover:bg-blue-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.0"
            stroke="currentColor"
            className="w-7  "
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
};

export default CreateButton;
