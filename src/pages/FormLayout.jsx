import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function FormLayout() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div
        className="container p-4 shadow-lg bg-light position-relative"
        style={{ minHeight: "94.1vh" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default FormLayout;
