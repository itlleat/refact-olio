


import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';

import Project from './Project';
import Menu from './Menu';
import Footer from './Footer'
import DarkModeSwitch from './DarkModeSwitch';
import "./PortfolioContainer.css"
import About from './About';
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import AboutFour from './AboutFour'
import Choose from './Choose'
import Email from './Email'




export default function PortfolioContainer() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [collapsed, setCollapsed] = useState(!isDarkMode);

  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
    setCollapsed(!checked);
  };

  const containerClassName = `${isDarkMode ? 'dark-mode' : 'light-mode'} ${collapsed ? 'collapsed' : ''}`;

  return (
    <div>
      <div className={containerClassName}>
        <DarkModeSwitch isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />

        <Menu className='menu' />
        <Collapse in={collapsed} collapsedSize={40}>
          <div className="content">
            {/* Content to be collapsed */}
            {/* Example: Changing the background color */}
            <div className="background-color" />
          </div>
        </Collapse>
        <Choose isDarkMode={isDarkMode} />
        <About isDarkMode={isDarkMode} />
        <AboutTwo isDarkMode={isDarkMode} />
        <AboutThree isDarkMode={isDarkMode} />
        <AboutFour isDarkMode={isDarkMode} />
        <Project isDarkMode={isDarkMode} />
        {/* <Technologies isDarkMode={isDarkMode} /> */}
        <Email isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}
