import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";
import Ref from "../pages/Ref";
import State from "../pages/State";
import Login from "../pages/Login";
import Form from "../pages/Form";
import Register from "../pages/Register";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="ref" element={<Ref />} />
        <Route path="state" element={<State />} />
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/form" element={<Form />} />
      <Route path="/404" element={<NoPage />} />
    </Routes>
  );
}
