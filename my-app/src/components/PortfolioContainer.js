import React, { useState } from 'react';
import Collapse from '@mui/material/Collapse';
import Footer from './Footer';
import Project from './Project';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import Menu from './Menu';
import Technologies from './Technologies';

export default function PortfolioContainer() {
  const defaultProperties = {
    dark: {
      circle: {
        r: 9,
      },
      mask: {
        cx: '50%',
        cy: '23%',
      },
      svg: {
        transform: 'rotate(40deg)',
      },
      lines: {
        opacity: 0,
      },
    },
    light: {
      circle: {
        r: 5,
      },
      mask: {
        cx: '100%',
        cy: '0%',
      },
      svg: {
        transform: 'rotate(90deg)',
      },
      lines: {
        opacity: 1,
      },
    },
    springConfig: { mass: 4, tension: 250, friction: 35 },
  };

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
        <DarkModeSwitch
          className='switch'
          style={{ marginTop: '1rem', marginRight: '1rem' }}
          checked={isDarkMode}
          onChange={toggleDarkMode}
          size={50}
          defaultProperties={defaultProperties}
        />

        <Menu className='menu' />
        <Collapse in={collapsed} collapsedSize={40}>
          <div className="content">
            {/* Content to be collapsed */}
            {/* Example: Changing the background color */}
            <div className="background-color" />
          </div>
        </Collapse>
        <Technologies />
        <Project />
        <Footer />
      </div>
    </div>
  );
}