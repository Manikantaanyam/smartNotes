import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./Components/Landing";
import Form from "./Components/form";
import Note from "./Components/Note";
import Ai from "./Components/Ai";
import Notes from "./Components/Notes";
import SideBar from "./Components/SideBar";
import DashBoard from "./Components/DashBoard";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Form type={"signup"} />} />
        <Route path="/login" element={<Form type={"login"} />} />
        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/note" element={<Note />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/Aiassistant" element={<Ai />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
