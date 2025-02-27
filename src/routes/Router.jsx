import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import NoPage from "../pages/NoPage";
import Layout from "../pages/Layout";
import Ref from "../pages/Ref";
import State from "../pages/State";
import Login from "../pages/Login";
import Form from "../pages/Form";
import Register from "../pages/Register";
import CheckboxRadioSwitch from "../pages/CheckboxRadioSwitch";
import SelectFileForm from "../pages/SelectFileForm";
import FormValidation from "../pages/FormValidation";
import FormLayout from "../pages/FormLayout";

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

      <Route path="/form/*" element={<FormLayout />}>
        <Route index element={<Form />} />
        <Route path="checkbox-radio-switch" element={<CheckboxRadioSwitch />} />
        <Route path="select-file" element={<SelectFileForm />} />
        <Route path="form-validation" element={<FormValidation />} />
        {/* Redirect */}
        <Route path="*" element={<Navigate to="/404" />} />
      </Route>

      {/* <Route path="/form" element={<Form />} /> */}
      {/* <Route path="checkbox-radio-switch" element={<CheckboxRadioSwitch />} /> */}
      {/* <Route path="select-file" element={<SelectFileForm />} /> */}
      {/* <Route path="form-validation" element={<FormValidation />} /> */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route path="/404" element={<NoPage />} />
    </Routes>
  );
}
