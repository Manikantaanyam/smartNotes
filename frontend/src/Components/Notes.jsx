import axios from "axios";
import React, { useEffect, useState } from "react";
import { getItem } from "./Session";
import SideBar from "./SideBar";
import CreateButton from "./CreateButton";
import { ToastContainer, toast } from "react-toastify";
import { useSetRecoilState } from "recoil";
import { NoteIdAtom } from "../Store/Atoms/NoteIdAtom";
import { useNavigate } from "react-router-dom";

const Notes = () => {
  const [data1, setData1] = useState([]);
  const sessionValue = getItem("token");
  const parseSession = JSON.parse(sessionValue);
  const setNoteIdAtom = useSetRecoilState(NoteIdAtom);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notes", {
          headers: {
            Authorization: `Bearer ${parseSession.token}`,
          },
        });

        setData1(response.data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);

  const handleDelete = async (note_id) => {
    console.log(note_id);

    try {
      const response = await axios.delete(
        `http://localhost:3000/api/notes`,

        {
          params: { id: note_id },
          headers: {
            Authorization: `Bearer ${parseSession.token}`,
          },
        }
      );
      setData1((prevData) => prevData.filter((note) => note._id !== note_id));
      toast.success(response.data.msg);
    } catch (e) {
      toast.error(e.response.data.msg);
    }
  };

  return (
    <div className="w-full h-full p-6 overflow-x-hidden ">
      <div className="grid grid-cols-1 md:grid-cols-3   gap-y-5 border-none h-[450px] overflow-x-hidden overflow-y-scroll">
        <CreateButton />
        {data1.length == 0 ? (
          <CreateButton />
        ) : (
          data1.map((i) => (
            <div
              className="w-[300px]  h-[200px] p-4 shadow-md border flex flex-col space-y-3"
              key={i._id}
            >
              <h1 className="font-bold text-lg">{i.title}</h1>
              <p
                className="text-gray-700 min-h-[50px]"
                dangerouslySetInnerHTML={{
                  __html: i.content.slice(0, 50).replace(/^"|"$/g, ""),
                }}
              ></p>
              <p className="text-gray-700">
                {new Date(i.created_At).toLocaleString()}
              </p>
              <div className="flex space-x-4 relative  left-44 bottom-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 cursor-pointer"
                  onClick={() => {
                    setNoteIdAtom(i._id);

                    navigate("/dashboard/edit");
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 cursor-pointer"
                  onClick={() => {
                    handleDelete(i._id);
                  }}
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-5 cursor-pointer"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
                  />
                </svg>
              </div>
            </div>
          ))
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default Notes;
