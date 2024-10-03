import React, { useState } from "react";
import axios from "axios";
import { GEMINI_API } from "../config";
import { useRecoilState } from "recoil";
import { AiAnswer, AiQuestion } from "../Store/Atoms/NoteIdAtom";
import { getItem } from "./Session";

const Ai = () => {
  const [aiPrompt, setAiPrompt] = useRecoilState(AiQuestion);
  const [aiAnswer, setAiAnswer] = useRecoilState(AiAnswer);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState();

  const user = getItem("token");
  const parseUsername = JSON.parse(user);

  const handleAi = async () => {
    setLoading(true);
    setAiPrompt(question);

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
      .replace(/\*\s+/g, "<li>")
      .replace(/(<li>.*?<\/li>)/g, "<ul>$1</ul>")
      .replace(/(.*?):/g, "<h1>$1:</h1>")
      .replace(/##\s*(.*)/g, "<h1>$1</h1>");

    setAiAnswer(boldFormattedAnswer);

    setLoading(false);
  };

  return (
    <div className="relative w-[1000px] h-[480px] border m-6 shadow-md">
      <div className=" p-10 overflow-y-scroll overflow-x-hidden h-[420px] flex flex-col space-y-5">
        {aiPrompt ? (
          <div className="flex">
            <button className="w-10 h-10 rounded-full text-white font-bold bg-rose-600">
              {parseUsername.username.toUpperCase()[0]}
            </button>
            <div className="p-2 text-[16px] w-[100%] rounded-full pl-4">
              {aiPrompt}
            </div>
          </div>
        ) : null}

        {loading ? (
          <div className="flex flex-col space-y-4">
            <hr className="w-full h-[25px] bg-gray-300" />
            <hr className="w-full h-[25px] bg-gray-300" />
            <hr className="w-full h-[25px] bg-gray-300" />
          </div>
        ) : (
          <div
            className=""
            dangerouslySetInnerHTML={{ __html: aiAnswer }}
          ></div>
        )}
      </div>
      <div className="flex justify-between p-3 absolute bottom-1 w-full">
        <input
          type="text"
          placeholder="Ask Doubts.."
          className="border w-full p-3 text-md  focus:outline-none"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div
          onClick={handleAi}
          className="flex  space-x-3 p-3 cursor-pointer  bg-blue-700 text-white font-semibold"
        >
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
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>
          <p>send</p>
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
