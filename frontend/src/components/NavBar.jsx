import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <Link to="/">Home</Link>{" "}
      {!user && (
        <>
          | <Link to="/login">Login</Link> | <Link to="/register">Register</Link>
        </>
      )}
      {user && (
        <>
          {" "}
          | Welcome, {user.name} ({user.role})
          {" | "}
          {user.role === "admin" && <Link to="/admin">Admin Dashboard</Link>}
          {" | "}
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </nav>
  );
}
