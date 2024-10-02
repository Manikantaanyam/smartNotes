import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { getItem } from "./Session";
import { ToastContainer, toast } from "react-toastify";
import { useRecoilState } from "recoil";
import { ContentAtom, TitleAtom } from "../Store/Atoms/NoteIdAtom";
const Note = () => {
  const [titleAtom, setTitleAtom] = useRecoilState(TitleAtom);
  const [contentAtom, setContentAtom] = useRecoilState(ContentAtom);

  useEffect(() => {}, []);

  const sessionValue = getItem("token");
  const parseSession = JSON.parse(sessionValue);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/notes",
        {
          title: titleAtom,
          content: JSON.stringify(contentAtom),
        },
        {
          headers: {
            Authorization: `Bearer ${parseSession.token}`,
          },
        }
      );

      toast.success(response.data.msg);
    } catch (e) {
      console.log(e);

      toast.error("error");
    }
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "image",
    "video",
  ];

  return (
    <div className="m-6 h-[480px] border w-[1000px] shadow-lg flex flex-col">
      <div className="flex w-full border justify-between">
        <input
          type="text"
          placeholder="Enter the title"
          value={titleAtom}
          className=" bg-gray-100 w-full text-xl font-semibold border-gray-500 p-3 focus:outline-none"
          onChange={(e) => {
            setTitleAtom(e.target.value);
          }}
        />
        <div
          onClick={handleSubmit}
          className="flex bg-blue-600 px-3 space-x-3 text-bold cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 text-white"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
            />
          </svg>
          <button className=" text-lg text-white ">save</button>
        </div>
      </div>
      <div className="focus:outline-none">
        <ReactQuill
          theme="snow"
          value={contentAtom}
          onChange={setContentAtom}
          modules={modules}
          formats={formats}
          className="h-[383px]  focus:outline-none"
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Note;
