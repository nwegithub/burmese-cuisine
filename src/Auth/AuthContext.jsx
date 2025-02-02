import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMya, setIsMya] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const isMyanmar = localStorage.getItem('language');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    if (isMyanmar === "eng") {
      setIsMya(false);
    } else {
      setIsMya(true);
    }
  }, []);

  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isMya, setIsMya }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
