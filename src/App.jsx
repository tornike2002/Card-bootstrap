import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<UserInfo />} />
        <Route path="/" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
