//Old login code that works on only default values
/*import React, { useState } from "react";
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
}*/
//New login code to take any email and password
import "../assets/css/login.css";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

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
      </form>
    </div>
  );
}
