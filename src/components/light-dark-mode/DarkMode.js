import React, { useState } from 'react';

import './DarkMode.css';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

const DarkMode = () => {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }

  let toggleIconBtn;
  if (theme === 'light') {
    toggleIconBtn = 'dark'
  } else {
    toggleIconBtn = 'light'
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <button className="toggle-theme-btn" onClick={toggleTheme}>
        {toggleIconBtn}
      </button>
    </ThemeProvider>
  )
}

export default DarkMode;