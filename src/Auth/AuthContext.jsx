import React, { createContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isMya,setIsMya] = useState(true)

  useEffect(() => {
    const isUser = localStorage.getItem('user');
    const isMyanmar = localStorage.getItem('language')

console.log("isMya",isMyanmar)
    if(isMyanmar === "eng"){
      setIsMya(false)
    }else{
      setIsMya(true)
    }
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
    <AuthContext.Provider value={{ user, login, logout,isMya,setIsMya }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);


