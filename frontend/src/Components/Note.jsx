import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import axios from "axios";
import { getItem } from "./Session";
import { ToastContainer, toast } from "react-toastify";

const Note = () => {
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const sessionValue = getItem("token");
  const parseSession = JSON.parse(sessionValue);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/notes",
        {
          title,
          content: JSON.stringify({ value }),
        },
        {
          headers: {
            Authorization: `Bearer ${parseSession.msg.token}`,
          },
        }
      );

      toast.success(response.data.msg);
    } catch (e) {
      toast.error(e.response.data.error);
    }
  };
  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image", "video"],
      ["clean"], // Removes all formatting
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
    <div className="flex h-[90vh]  w-full  mt-2 space-x-3 p-3 ">
      <div className="flex flex-col gap-y-3 w-[55%]">
        <input
          type="text"
          placeholder="enter the title"
          className="border border-gray-300 p-2"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          modules={modules}
          formats={formats}
          className="h-[90vh] overflow-scroll"
        />

        <button
          className=" mt-10 bg-black text-white p-3 cursor-pointer"
          onClick={handleSubmit}
        >
          save
        </button>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Note;
