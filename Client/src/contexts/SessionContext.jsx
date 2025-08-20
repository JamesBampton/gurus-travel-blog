import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("authToken") || null);
  const [user, setUser] = useState(null); // null means not logged in
  const [showCreateModal, setShowCreateModal] = useState(false);
  //when token changes, set to LocalStorage
  useEffect(() => {
    if (token) {
      localStorage.setItem("authToken", token);
    } else {
      localStorage.removeItem("authToken");
    }
  }, [token]);
  //on first load, if token exists, fetch user
useEffect(() => {
    const fetchUser = async () => {
      if (!token) return;
      try {
        const res = await axios.get("http://localhost:3001/users/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(res.data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setUser(null);
        setToken(null);
      }
    };
    fetchUser();
  }, [token]);
  const login = (userData, authToken) => {
    setUser(userData );
    setToken(authToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);

    setShowCreateModal(false);

    localStorage.removeItem("authToken");

  };

  return (
    <SessionContext.Provider value={{ user, token, login, logout,setUser,showCreateModal,
        setShowCreateModal }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
