import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const localStorageTheme = JSON.parse(localStorage.getItem('@theme'));
  const [theme, setTheme] = useState(localStorageTheme || 'dark');

  function handleToggleTheme() {
    setTheme(prevState => prevState === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    localStorage.setItem('@theme', JSON.stringify(theme))
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};