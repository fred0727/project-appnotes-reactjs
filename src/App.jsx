import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./Components/auth/ProtectedRoutes";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Archived from "./Pages/Archived";
import "./App.css";

function App() {
  return (
    <main className="">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/archived" element={<Archived />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
