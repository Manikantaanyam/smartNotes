import React, { useState } from "react";
import axios from "axios";
import { GEMINI_API } from "../config";

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
    <div className="w-[60%] m-auto mt-2 border border-gray-200 shadow-lg relative">
      <div
        className=" p-4 overflow-y-scroll overflow-x-hidden h-[70vh]"
        dangerouslySetInnerHTML={{ __html: answer }}
      />

      <div className="flex  p-3 justify-between  sticky bottom-0  ">
        <input
          type="text"
          placeholder="ask doubt"
          className="p-3 w-[50%] border"
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
  );
};

export default Ai;
