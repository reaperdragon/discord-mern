import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Error, Login, Register } from "./pages";
import { Dashboard } from "./pages/dashboard";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Error />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;