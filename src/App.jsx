import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import UserInfo from "./components/User/UserInfo";
import Cards from "./components/Cards/Cards";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<UserInfo />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>
    </>
  );
}

export default App;
