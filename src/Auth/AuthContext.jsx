import React, { createContext, useState, useEffect } from 'react';

// Create Auth Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const isUser = localStorage.getItem('user');

  setUser(isUser)
  }, []);


  const login = (userData, token) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

const fetchUserData = async (token) => {
    try {
      const response = await fetch('http://localhost:4000/users/login', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error('Failed to fetch user data');
      }

      const userData = await response.json();
      return { name: userData.name, token: token };
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };
