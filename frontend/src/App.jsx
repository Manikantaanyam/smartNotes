import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Landing from "./Components/Landing";
import Form from "./Components/form";
import Header from "./Components/Header";
import Note from "./Components/Note";
import Ai from "./Components/Ai";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<Form type={"signup"} />} />
        <Route path="/login" element={<Form type={"login"} />} />
        <Route path="/note" element={<Note />} />
        <Route path="/Aiassistant" element={<Ai />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
