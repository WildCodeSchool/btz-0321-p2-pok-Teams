import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import Header from '../Header';

const LightTheme = {
  pageBackground: 'bg-gradient-to-r from-yellow-300 to-yellow-500 dark:text-gray-300',
  titleColor: '#dc658b',
  tagLineColor: 'black',
  textColor: 'black',
};

const DarkTheme = {
  pageBackground: 'bg-gray-700',
  titleColor: 'lightpink',
  tagLineColor: 'lavender',
};

const themes = {
  light: LightTheme,
  dark: DarkTheme,
};

function Layout({ children }) {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <ThemeProvider theme={themes[theme]}>
      <div id="layout" className={`grid w-screen min-h-screen pc:grid-rows-PCRows ${themes[theme].pageBackground}`}>
        <Header theme={theme} setTheme={setTheme} />
        <div className="bg-yellow-100 m-2">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
Layout.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Layout;
