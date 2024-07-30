// ItemContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ItemContext = createContext();

export const useItem = () => useContext(ItemContext);

export const ItemProvider = ({ children }) => {
  const [item, setItem] = useState(null);

  // Load item from local storage when the component mounts
  useEffect(() => {
    const storedItem = localStorage.getItem('item');
    if (storedItem) {
      setItem(JSON.parse(storedItem));
    }
  }, []);

  // Save item to local storage whenever it changes
  useEffect(() => {
    if (item) {
      localStorage.setItem('item', JSON.stringify(item));
    }
  }, [item]);

  return (
    <ItemContext.Provider value={{ item, setItem }}>
      {children}
    </ItemContext.Provider>
  );
};
