//New login code to take any email and password
import "../assets/css/login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";
import Register from "./Register";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useSession();

  const validateForm = () => {
    if (!email || !password) {
      setError("Both fields are required.");
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format.");
      return false;
    }
    if (password.length < 8) {
      setError("Password must be at least 8 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/users/login", {
        email,
        password,
      });

      const { user, token } = response.data;

      setUser({
        username: user.username,
        email: user.email,
        id: user.id,
        token,
      });

      localStorage.setItem("authToken", token);
      navigate("/");
    } catch (err) {
      console.error("Login error:", err);
      setError(err.response?.data?.message || "Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        {error && <p className="error">{error}</p>}
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
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <p style={{ color: "#008000", fontSize: 16 }}>
          Don't have an account?<a href="/register"> Register here </a>{" "}
        </p>
      </form>
    </div>
  );
}
