//import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AddEmp from "./components/AddEmp";
import ShowAllEmps from "./components/ShowAllEmps";
import ContactUs from "./components/ContactUs";
import EditDelete from "./components/EditDelete";

export default function App() {
  return (
    <div>
      <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add" element={<AddEmp />} />
        <Route path="/all" element={<ShowAllEmps />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/edit" element={<EditDelete />} />

      </Routes>
      </BrowserRouter>
    </div>
  );
}
