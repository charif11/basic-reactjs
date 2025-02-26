import { HashRouter  } from "react-router-dom";
import AppRouter from "./routes/Router";
import "./App.css";

export default function App() {
  return (
    <HashRouter>
      <AppRouter />
    </HashRouter>
  );
}
