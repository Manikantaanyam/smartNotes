import React, { useState } from "react";
import axios from "axios";
import { GEMINI_API } from "../config";
import SideBar from "./SideBar";

const Ai = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleAi = async () => {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API}`,
      method: "post",
      data: { contents: [{ parts: [{ text: question }] }] },
    });

    let rawanswer = response.data.candidates[0].content.parts[0].text;

    const boldFormattedAnswer = rawanswer
      .replace(/\*\*(.*?)\*\*/g, "<b>$1</b>")
      .replace(/\n/g, "<br>")
      .replace(/"/g, "&quot;")
      .replace(/\*\s+/g, "<li>") // Replace asterisks with <li>
      .replace(/(<li>.*?<\/li>)/g, "<ul>$1</ul>")
      .replace(/(.*?):/g, "<h1>$1:</h1>");

    setAnswer(boldFormattedAnswer);
  };

  return (
    <div className="flex  w-full space-x-3 p-3 ">
      <div className="w-[60%] h-full m-auto mt-2 border  border-gray-300  relative">
        <div
          className=" p-10 overflow-y-scroll overflow-x-hidden h-[80vh]"
          dangerouslySetInnerHTML={{ __html: answer }}
        />

        <div className="flex  p-3 justify-between  sticky bottom-0  ">
          <input
            type="text"
            placeholder="ask doubt"
            className="p-3 w-[80%] border border-gray-500"
            onChange={(e) => setQuestion(e.target.value)}
          />
          <button
            onClick={handleAi}
            className="rounded-md p-3 bg-black text-white"
          >
            send
          </button>
        </div>
      </div>
    </div>
  );
};

export const Shimmer = () => {
  return (
    <div>
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
      <div className="h-[20px] w-full bg-gray-400"></div> <br />
    </div>
  );
};

export default Ai;
