import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/Layout.css'

function Layout() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container p-4 shadow-lg bg-light"
      style={{minHeight:'88.1vh'}}
      >
        <Outlet />
      </div>
      <Footer name="charif" />
    </div>
  );
}

export default Layout;
