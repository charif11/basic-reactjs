import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Navbar";
import Footer from "../components/Footer";
import '../css/Layout.css'

function Layout() {
  return (
    <div className="bg-secondary">
      <Header />
      <div className="container p-4 shadow-lg bg-light min-vh-100">
        <Outlet />
      </div>
      <Footer name="charif" />
    </div>
  );
}

export default Layout;
