import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Rank from "./pages/Rank";
import Ref from "./pages/Ref";
import Task from "./pages/TaskPage";
import Tap from "./pages/Tap";
import Boost from "./pages/Boost";
import Stats from "./pages/Stats";
import "./App.css";
import TaskPage from "./pages/TaskPage";
import Dashboard from "./components/Dashboard";
import { Login } from "@mui/icons-material";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rank" element={<Rank />} />
      <Route path="/ref" element={<Ref />} />
      <Route path="/task" element={<TaskPage />} />
      <Route path="/tap" element={<Home />} />
      <Route path="/boost" element={<Boost />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
