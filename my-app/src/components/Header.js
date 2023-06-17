// import React, { useState } from "react";
// import { DarkModeSwitch } from 'react-toggle-dark-mode';
// import './Header.css';




// // const styles = {
// //     header: {
// //         background: "#45ff",
// //         height: "150px",
// //         top: "0",
// //         left: "0",
// //         width: "100%",
// //     },
// //     h1: {
// //         fontSize: "100px",
// //         color: "#5678",
// //         textAlign: "left",
// //         margin: "0",
// //         paddingLeft: "20px",
// //         paddingTop: "30px",
// //         textShadow: "",
// //     }
// // };

// function Header() {

//     const defaultProperties = {
//         dark: {
//           circle: {
//             r: 9,
//           },
//           mask: {
//             cx: '50%',
//             cy: '23%',
//           },
//           svg: {
//             transform: 'rotate(40deg)',
//           },
//           lines: {
//             opacity: 0,
//           },
//         },
//         light: {
//           circle: {
//             r: 5,
//           },
//           mask: {
//             cx: '100%',
//             cy: '0%',
//           },
//           svg: {
//             transform: 'rotate(90deg)',
//           },
//           lines: {
//             opacity: 1,
//           },
//         },
//         springConfig: { mass: 4, tension: 250, friction: 35 },
//       };
    
//       const [isDarkMode, setDarkMode] = useState(false);
    
//       const toggleDarkMode = (checked) => {
//         setDarkMode(checked);
//       };
//     return(
//     // <header className="col-1" style={styles.header}>
//     <header className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
//         {/* <h1 style={styles.h1}>Scooter</h1> */}
//         <DarkModeSwitch
//       style={{ marginBottom: '2rem' }}
//       checked={isDarkMode}
//       onChange={toggleDarkMode}
//       size={120}
//       defaultProperties={defaultProperties} // Pass the defaultProperties as a prop to DarkModeSwitch
//     />
//     </header>
//     );
// }

// export default Header;