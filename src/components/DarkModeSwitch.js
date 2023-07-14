import React from 'react';
import { DarkModeSwitch as ToggleDarkModeSwitch } from 'react-toggle-dark-mode';
import './DarkModeSwitch.css'

export default function DarkModeSwitch({ isDarkMode, toggleDarkMode }) {
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

  return (
    <>
    <div className='switch-container'>
    <ToggleDarkModeSwitch
      className='switch'
      style={{ marginTop: '.5rem', marginRight: '.5rem' }}
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      defaultProperties={defaultProperties}
    />
{/* <p className='spacer'></p> */}
</div>
</>
  );
}
