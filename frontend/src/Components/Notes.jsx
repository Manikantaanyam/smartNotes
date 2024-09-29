import axios from "axios";
import React, { useEffect, useState } from "react";
import { getItem } from "./Session";
import SideBar from "./SideBar";

const Notes = () => {
  const [data1, setData1] = useState([]);
  const sessionValue = getItem("token");
  const parseSession = JSON.parse(sessionValue);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/notes", {
          headers: {
            Authorization: `Bearer ${parseSession.token}`,
          },
        });

        console.log(response.data.notes);

        setData1(response.data.notes);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };

    fetchNotes();
  }, []);
  return (
    <div className="flex  w-full space-x-3 p-3 ">
      <div className="w-[70%] grid grid-cols-2   gap-2 overflow-x-hidden lg:grid-cols-3">
        {data1.length === 0 ? (
          <p>create Note</p>
        ) : (
          data1.map((i) => (
            <div
              key={i._id}
              className="w-[350px] h-[200px] p-4 border border-gray-200 rounded-md shadow-md space-y-3"
            >
              <h2 className="font-semibold text-lg">{i.title}</h2>
              <p
                className="text-gray-500"
                dangerouslySetInnerHTML={{
                  __html: i.content.slice(0, 50).replace(/^"|"$/g, ""),
                }}
              ></p>
              <p className="text-gray-600">
                {new Date(i.created_At).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Notes;
