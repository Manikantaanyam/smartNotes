import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./Components/Landing";
import Form from "./Components/form";
import Note from "./Components/Note";
import Ai from "./Components/Ai";
import Notes from "./Components/Notes";
import DashBoard from "./Components/DashBoard";
import Edit from "./Components/Edit";
import ViewNote from "./Components/ViewNote";
import Protected from "./Components/Protected";
import { useRecoilState } from "recoil";
import { TokenAtom } from "./Store/Atoms/NoteIdAtom";
import { getItem } from "./Components/Session";

const App = () => {
  const [tokenAtom, setTokenAtom] = useRecoilState(TokenAtom);

  useEffect(() => {
    const token = getItem("token");
    const parseToken = JSON.parse(token);
    if (parseToken) {
      setTokenAtom(parseToken.token);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/signup" element={<Form type={"signup"} />} />
          <Route path="/login" element={<Form type={"login"} />} />
        </Route>
        <Route
          path="/dashboard"
          element={
            <Protected>
              <DashBoard />
            </Protected>
          }
        >
          <Route
            path="/dashboard/note"
            element={
              <Protected>
                <Note />
              </Protected>
            }
          />
          <Route
            path="/dashboard/"
            element={
              <Protected>
                <Notes />
              </Protected>
            }
          />
          <Route
            path="/dashboard/Aiassistant"
            element={
              <Protected>
                <Ai />
              </Protected>
            }
          />
          <Route
            path="/dashboard/edit"
            element={
              <Protected>
                <Edit />
              </Protected>
            }
          />
          <Route
            path="/dashboard/view"
            element={
              <Protected>
                <ViewNote />
              </Protected>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
