import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import "../style/main.scss";

const App = () => {
  return (
    <React.StrictMode>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </React.StrictMode>
  );
};

export default App;
