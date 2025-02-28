import { HashRouter, BrowserRouter } from "react-router-dom";
import AppRouter from "./routes/Router";

export default function App() {
  return (
    // ใช้อัพโหลดลง github เฉพาะหน้าเว็ปโดยไม่เชื่อมฐานข้อมูล
    <HashRouter>
      <AppRouter />
    </HashRouter>

    // <BrowserRouter>
    //   <AppRouter />
    // </BrowserRouter>
  );
}
