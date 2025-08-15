import React, { useState } from "react";
import axios from "axios";
import api from "../../api.jsx";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const defaultUser = {
  email: "jane@example.com", // Need to remove defaults later
  password: "password123",
};

export default function Login() {
  const [email, setEmail] = useState(defaultUser.email);
  const [password, setPassword] = useState(defaultUser.password);
  const navigate = useNavigate();
  const { setUser } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send login request to backend
      const response = await axios.post(
         "http://localhost:3001/users/login", // backend URL
        { email, password }
      );

      const data = response.data;

      // Save user to session context
      setUser({
        username: data.user.username,
        email: data.user.email,
        id: data.user.id,
      });

      // Save token to localStorage
      localStorage.setItem("authToken", data.token);

      // Redirect to home page
      navigate("/");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid email or password");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        autoComplete="email"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        autoComplete="current-password"
      />
      <button type="submit">Login</button>
    </form>
  );
}
