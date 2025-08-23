import { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first, then system preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        return savedTheme === 'dark';
      }
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    console.log('Theme changed to:', isDark ? 'dark' : 'light');
    
    // Update localStorage and document class when theme changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      
      if (isDark) {
        document.documentElement.classList.add('dark');
        document.documentElement.setAttribute('data-theme', 'dark');
        console.log('Added dark class to html element');
      } else {
        document.documentElement.classList.remove('dark');
        document.documentElement.setAttribute('data-theme', 'light');
        console.log('Removed dark class from html element');
      }
    }
  }, [isDark]);

  const toggleTheme = () => {
    console.log('Toggling theme from:', isDark ? 'dark' : 'light');
    setIsDark(!isDark);
  };

  const value = {
    isDark,
    toggleTheme,
  };

  console.log('ThemeContext rendered with isDark:', isDark);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}; 