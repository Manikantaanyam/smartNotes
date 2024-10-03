import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getItem } from "./Session";
import { NoteIdAtom } from "../Store/Atoms/NoteIdAtom";
import { ToastContainer, toast } from "react-toastify";

const Edit = () => {
  const id = useRecoilValue(NoteIdAtom);
  const sessionValue = getItem("token");
  const parseSession = JSON.parse(sessionValue);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const handleEdit = async () => {
      const respose = await axios.get(`https://smartnotes-o2e5.onrender.com/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${parseSession.token}`,
        },
      });

      setTitle(respose.data.msg.title);
      setContent(respose.data.msg.content);
    };

    handleEdit();
  }, []);

  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `hhttps://smartnotes-o2e5.onrender.com/api/notes/${id}`,
        {
          title,
          content: JSON.stringify(content),
        },
        {
          headers: {
            Authorization: `Bearer ${parseSession.token}`,
          },
        }
      );
      toast.success(response.data.msg);
    } catch (e) {
      toast.error(e.response.data.msg);
    }
  };

  const [value, setValue] = useState("");
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
    <div>
      <div className="m-6 h-[480px] border w-[1000px] shadow-lg flex flex-col">
        <div className="flex w-full border justify-between">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className=" bg-gray-100 w-full text-xl font-semibold border-gray-500 p-3 focus:outline-none"
          />
          <div
            onClick={handleUpdate}
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
            <button className=" text-lg text-white ">Update</button>
          </div>
        </div>
        <div className="focus:outline-none">
          <ReactQuill
            theme="snow"
            onChange={setContent}
            value={content.replace(/"/g, "")}
            modules={modules}
            formats={formats}
            className="h-[383px]  focus:outline-none"
          />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Edit;
