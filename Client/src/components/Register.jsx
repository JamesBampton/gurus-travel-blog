import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useSession();

  const validateForm = () => {
    const usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
    const emailRegex = /^\S+@\S+\.\S+$/;

    if (!username || !email || !password) {
      setError("All fields are required.");
      return false;
    }
    if (!usernameRegex.test(username)) {
      setError("Username must be at least 3 characters and contain only letters, numbers, or underscores.");
      return false;
    }
    if (!emailRegex.test(email)) {
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
      const response = await axios.post("http://localhost:3001/api/users/register", {
        username,
        email,
        password,
      });

      const { user, token } = response.data;

      setUser({
        username: user.username,
        email: user.email,
        id: user.id,
      });

      localStorage.setItem("authToken", token);
      navigate("/");
    } catch (err) {
      console.error("Registration error:", err);
      setError(err.response?.data?.message || "Registration failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="register-form">
      <h2>Register</h2>
      {error && <p className="error">{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
        autoComplete="username"
      />
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
        autoComplete="new-password"
      />
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
}
