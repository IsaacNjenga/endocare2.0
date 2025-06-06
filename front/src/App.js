import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home.js";
import Diary from "./pages/Diary/diary";
import Dashboard from "./pages/dashboard.js";
import Appointments from "./pages/Appointments/appointments";
import Resources from "./pages/resources";
import Auth from "./pages/auth";
import ProtectedRoutes from "./components/protectedRoutes";
import Profile from "./pages/Profile/profile";
import Cookies from "universal-cookie";
import CreateMedicalInfo from "./pages/Profile/Patient Profile/medicalInfo/createMedicalInfo";
import CreateEntry from "./pages/Diary/createEntry";
import DiaryContent from "./pages/Diary/diaryContent";
import CreateAppointment from "./pages/Appointments/createAppointment";
import Specialists from "./pages/specialists.js";

const cookies = new Cookies();
export const UserContext = createContext();

axios.defaults.baseURL = "http://localhost:3001/EndoCare";
axios.defaults.withCredentials = true;

const authToken = cookies.get("token");
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const activeUser = cookies.get("user");
    if (activeUser) {
      setUser(activeUser);
    }
  }, []);

  if (!authToken) {
    return <Auth />;
  }

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
        }}
      >
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoutes>
                <Navbar />
              </ProtectedRoutes>
            }
          >
            <Route index element={<Home />} />
            <Route path="diary" element={<Diary />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="appointments" element={<Appointments />} />
            <Route path="resources" element={<Resources />} />
            <Route path="profile" element={<Profile />} />
            <Route path="specialists" element={<Specialists />} />
            <Route
              path="profile/create-medical-info"
              element={<CreateMedicalInfo />}
            />
            <Route path="diary/create-entry" element={<CreateEntry />} />
            <Route path="diary/date/:date" element={<DiaryContent />} />
            <Route
              path="appointments/create-appointment"
              element={<CreateAppointment />}
            />
          </Route>
        </Routes>
      </UserContext.Provider>
    </>
  );
}

export default App;
