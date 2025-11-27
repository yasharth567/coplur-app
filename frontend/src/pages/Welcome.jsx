import React from "react";

export default function Welcome({ user }) {
  if (!user) {
    return <p>Please login to see the welcome page.</p>;
  }
  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>You are logged in as: {user.role.toUpperCase()}</p>
      {user.role === "student" && <p>Student dashboard content goes here.</p>}
      {user.role === "admin" && (
        <p>Use the Admin Dashboard to manage users.</p>
      )}
    </div>
  );
}

