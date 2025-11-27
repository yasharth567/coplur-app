import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import API from "./api";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Welcome from "./pages/Welcome";
import AdminDashboard from "./pages/AdminDashboard";

function PrivateRoute({ user, children }) {
  if (!user) return <Navigate to="/login" />;
  return children;
}

function AdminRoute({ user, children }) {
  if (!user) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/" />;
  return children;
}

export default function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // load user on first load if token exists
  useEffect(() => {
    const load = async () => {
      const token = localStorage.getItem("token");
      if (!token) return;
      try {
        const res = await API.get("/auth/me");
        setUser(res.data.user);
      } catch {
        localStorage.removeItem("token");
        navigate("/login");
      }
    };
    load();
  }, [navigate]);

  return (
    <div>
      <NavBar user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Welcome user={user} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/register" element={<Register setUser={setUser} />} />
        <Route
          path="/admin"
          element={
            <AdminRoute user={user}>
              <AdminDashboard />
            </AdminRoute>
          }
        />
      </Routes>
    </div>
  );
}

