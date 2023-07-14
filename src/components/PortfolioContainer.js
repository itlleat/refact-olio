import React, { useState } from 'react';
// import Collapse from '@mui/material/Collapse';
import Project from './Project';
// import Menu from './Menu';
import Footer from './Footer'
import DarkModeSwitch from './DarkModeSwitch';
import "./PortfolioContainer.css"
import Intro from './Intro';
import About from './About';
import AboutTwo from './AboutTwo'
import AboutThree from './AboutThree'
import AboutFour from './AboutFour'
import Choose from './Choose'
import Email from './Email'
import Stack from '@mui/material/Stack';

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
        <div className='spacer' />
      <Intro />
 
        <Choose isDarkMode={isDarkMode} />
        <Stack spacing={2}>
        <About isDarkMode={isDarkMode} />
        <AboutTwo isDarkMode={isDarkMode} />
        <AboutThree isDarkMode={isDarkMode} />
        <AboutFour isDarkMode={isDarkMode} />
        </Stack>
  
  <Project isDarkMode={isDarkMode} />
  
  <Email isDarkMode={isDarkMode} />     
 
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}




// <Menu className='menu' />
// <Collapse in={collapsed} collapsedSize={40}>
//   <div className="content">

//     <div className="background-color" />
//   </div>
// </Collapse>