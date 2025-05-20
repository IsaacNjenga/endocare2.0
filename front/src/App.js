import React, { createContext, useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.js";
import Diary from "./pages/Diary/diary";
import Dashboard from "./pages/dashboard.js";
import Appointments from "./pages/appointments";
import Resources from "./pages/resources";
//import Auth from "./pages/auth";

export const UserContext = createContext();

axios.defaults.baseURL = "http://localhost:3001/EndoCare";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="diary" element={<Diary />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="resources" element={<Resources />} />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
