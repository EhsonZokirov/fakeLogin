import React from "react";
import { Route, Routes } from "react-router";
import HomePage from "./Components/pages/HomePage";
import Login from "./Components/pages/Login";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
}

export default App;
