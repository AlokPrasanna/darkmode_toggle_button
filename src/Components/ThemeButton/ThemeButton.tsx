import React from 'react';
import { useTheme } from '../../Context/Theme';

const ThemeToggleButton: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();

  React.useEffect(() => {
    document.body.classList.toggle('dark-mode', themeMode === 'dark');
  }, [themeMode]);

  return (
    <button onClick={toggleTheme}>
      {themeMode === 'light' ? 'Dark Mode' : 'Light Mode'}
    </button>
  );
};

export default ThemeToggleButton;
