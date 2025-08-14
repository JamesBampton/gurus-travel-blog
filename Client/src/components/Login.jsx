import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSession } from "../contexts/SessionContext";

const defaultUser = {
  email: "test@travelblog.com", // Need to remove defaults later
  password: "Password123!",
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
        "http://localhost:5000/api/users/login", // change to your backend URL
        { email, password }
      );

      const data = response.data;

      // Save user to session context
      setUser({
        name: data.user.name,
        //email: data.user.email,
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
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}