


import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Footer from './Footer';
import Project from './Project';
import Menu from './Menu';
import Technologies from './Technologies';
import DarkModeSwitch from './DarkModeSwitch';
import "./PortfolioContainer.css"



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
        <Project isDarkMode={isDarkMode} />
        {/* <Technologies isDarkMode={isDarkMode} /> */}
        
        <Footer />
      </div>
    </div>
  );
}
