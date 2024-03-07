
import React, { createContext, useContext, useEffect, useState } from 'react';

type ThemeMode = 'light' | 'dark';

interface ThemeContextType {
  themeMode: ThemeMode;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
      const storedTheme = localStorage.getItem('theme');
      return (storedTheme || 'light') as ThemeMode;
    });
  
    const toggleTheme = () => {
      const newTheme = themeMode === 'light' ? 'dark' : 'light';
      setThemeMode(newTheme);
    };
  
    useEffect(() => {
      localStorage.setItem('theme', themeMode);
    }, [themeMode]);
  
    return (
      <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  };
  
