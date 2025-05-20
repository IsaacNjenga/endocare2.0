import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.js";
import Diary from "./pages/Diary/diary";
import Dashboard from "./pages/dashboard.js";
import Appointments from "./pages/appointments";
import Resources from "./pages/resources";
import Auth from "./pages/auth";
import ProtectedRoutes from "./components/protectedRoutes";

export const UserContext = createContext();

axios.defaults.baseURL = "http://localhost:3001/EndoCare";
axios.defaults.withCredentials = true;

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("verify", { headers: { Authorization: `Bearer ${token}` } })
        .then((res) => {
          if (res.data.success) {
            setUser(res.data.user);
            setIsAuthenticated(true);
          }
        })
        .catch((err) => {
          console.warn("Error during user verification", err);
        });
    }
  }, []);
  return (
    <>
      <UserContext.Provider
        value={{ user, setUser, isAuthenticated, setIsAuthenticated }}
      >
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />} />
            <Route path="diary" element={<Diary />} />
            <Route
              path="dashboard"
              element={
                <ProtectedRoutes>
                  <Dashboard />
                </ProtectedRoutes>
              }
            />
            <Route path="appointments" element={<Appointments />} />
            <Route path="resources" element={<Resources />} />
          </Route>
          <Route path="auth" element={<Auth />} />
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
