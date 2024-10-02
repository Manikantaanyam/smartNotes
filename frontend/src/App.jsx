import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./Components/Landing";
import Form from "./Components/form";
import Note from "./Components/Note";
import Ai from "./Components/Ai";
import Notes from "./Components/Notes";
import DashBoard from "./Components/DashBoard";
import Edit from "./Components/Edit";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}>
          <Route path="/signup" element={<Form type={"signup"} />} />
          <Route path="/login" element={<Form type={"login"} />} />
        </Route>
        <Route path="/dashboard" element={<DashBoard />}>
          <Route path="/dashboard/note" element={<Note />} />
          <Route path="/dashboard/" element={<Notes />} />
          <Route path="/dashboard/Aiassistant" element={<Ai />} />
          <Route path="/dashboard/edit" element={<Edit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
