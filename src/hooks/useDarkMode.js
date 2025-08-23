import { useTheme } from '../context/ThemeContext';

export const useDarkMode = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return {
    isDark,
    toggleTheme,
    // Utility functions
    isLight: !isDark,
    theme: isDark ? 'dark' : 'light',
    // Conditional classes
    darkClass: (lightClass, darkClass) => isDark ? darkClass : lightClass,
    // Conditional styles
    darkStyle: (lightStyle, darkStyle) => isDark ? darkStyle : lightStyle,
  };
}; 