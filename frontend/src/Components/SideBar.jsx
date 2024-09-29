import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const links = [
    { name: "Create Note", to: "/note" },
    { name: "Notes", to: "/notes" },
    { name: "Ai Assistance", to: "/Aiassistant" },
    { name: "Logout", to: "/#" },
  ];
  return (
    <div className="h-[100vh] w-[20%] bg-gradient-to-r from-[#1F2937] to-[#374151]  ">
      <h1 className="text-3xl font-bold text-white pl-4 pt-5">SmartNotes</h1>
      <div className="relative flex flex-col text-white pl-6 pt-10 space-y-2">
        {/* <Link
          onClick={() => {
            setColor1((p) => !p);
          }}
          to="/note"
          className="font-semibold text-lg hover:bg-gray-500 p-2"
        >
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <p>Create Note</p>
          </div>
        </Link>
        <Link
          to="/notes"
          className="font-semibold  text-lg hover:bg-gray-500 p-2"
        >
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p>Notes</p>
          </div>
        </Link>
        <Link
          to="/Aiassistant"
          className="font-semibold text-lg  hover:bg-gray-600 p-2"
        >
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>

            <p> Ai Assistance</p>
          </div>
        </Link>
        <Link href="" className="font-bold text-lg hover:bg-gray-500 p-2">
          <div className="flex items-center space-x-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
              />
            </svg>
            <p>Logout</p>
          </div>
        </Link> */}

        {links.map((link, index) => (
          <Link
            key={index}
            to={link.to}
            className={`font-semibold text-lg p-2  ${
              activeLink === index ? "bg-blue-500" : "hover:bg-gray-400"
            }`}
            onClick={() => setActiveLink(index)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
