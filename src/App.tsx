import React from 'react';
import { ThemeProvider } from './Context/Theme';
import ThemeToggleButton from './Components/ThemeButton/ThemeButton';
import './App.css'

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <h1>Alok Prasanna</h1>
        <ThemeToggleButton />
      </div>
    </ThemeProvider>
  );
};

export default App;
