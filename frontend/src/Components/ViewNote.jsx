import React from "react";
import axios from "axios";

import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { getItem } from "./Session";
import { NoteIdAtom } from "../Store/Atoms/NoteIdAtom";

const ViewNote = () => {
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
      console.log(respose.data);

      setTitle(respose.data.msg.title);
      setContent(respose.data.msg.content);
    };

    handleEdit();
  }, []);
  return (
    <div className="w-full h-full p-6 flex flex-col gap-3">
      <div className="font-semibold text-xl">{title}</div>
      <div
        className="overflow-y-scroll h-[450px]"
        dangerouslySetInnerHTML={{ __html: content.replace(/"/g, "") }}
      ></div>
    </div>
  );
};

export default ViewNote;
