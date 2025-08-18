import React, { createContext, useState, useContext } from "react";

const SessionContext = createContext();

export const SessionProvider = ({ children }) => {
  const [user, setUser] = useState(null); // null means not logged in
  const [showCreateModal, setShowCreateModal] = useState(false);

  const login = (userData) => {
    setUser(userData );
  };

  const logout = () => {
    setUser(null);
    setShowCreateModal(false);
  };

  return (
    <SessionContext.Provider value={{ user, login, logout,setUser,showCreateModal,
        setShowCreateModal }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSession = () => useContext(SessionContext);
