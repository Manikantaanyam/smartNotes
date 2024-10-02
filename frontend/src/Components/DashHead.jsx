import React from "react";
import { Outlet } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { clickAtom } from "../Store/Atoms/NoteIdAtom";

const DashHead = () => {
  const clickAtom1 = useRecoilValue(clickAtom);

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex items-center w-full py-8 justify-between h-[60px] bg-white shadow-md">
        {clickAtom1 === "Create Note" || clickAtom1 === "Ai Assistance" ? (
          <div className="flex space-x-5 p-4 ml-5 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-10 font-bold"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <p className="text-xl font-semibold">{clickAtom1}</p>
          </div>
        ) : (
          <div className="flex ml relative ml-5">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 absolute top-1/2 -translate-y-1/2 left-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
            <input
              type="text"
              placeholder="search.."
              className="border border-gray-500 w-[400px] pl-12 p-3 rounded-full text-black"
            />
          </div>
        )}

        <div className="flex space-x-8 mr-6 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>

          <button className="w-10 h-10 rounded-full bg-gray-500">M</button>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DashHead;
