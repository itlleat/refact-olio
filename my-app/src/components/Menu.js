// // import * as React from 'react';
// // import { Divide as Hamburger } from 'hamburger-react'
// // import Button from '@mui/material/Button';
// // import Menu from '@mui/material/Menu';
// // import MenuItem from '@mui/material/MenuItem';

// // export default function BasicMenu() {

// //   // const [isOpen, setOpen] = useState(false)

// // <Hamburger onToggle={toggled => {
// //   if (toggled) {
// //      // open a menu
// //   } else {
// //      // close a menu
// //   }
// // }} />


//   // const [anchorEl, setAnchorEl] = React.useState(null);
//   // const open = Boolean(anchorEl);
//   // const handleClick = (event) => {
//   //   setAnchorEl(event.currentTarget);
//   // };
//   // const handleClose = () => {
//   //   setAnchorEl(null);
//   // };

//   // return (
//   //   <div>
//   //     <Button
//   //       variant="contained"
//   //       size="large"
//   //       id="basic-button"
//   //       aria-controls={open ? 'basic-menu' : undefined}
//   //       aria-haspopup="true"
//   //       aria-expanded={open ? 'true' : undefined}
//   //       onClick={handleClick}
//   //     >
//   //       cd User/
//   //     </Button>
//   //     <Menu
//   //       id="basic-menu"
//   //       anchorEl={anchorEl}
//   //       open={open}
//   //       onClose={handleClose}
//   //       MenuListProps={{
//   //         'aria-labelledby': 'basic-button',
//   //       }}
//   //     >
//   //       <MenuItem onClick={handleClose}>Profile</MenuItem>
//   //       <MenuItem onClick={handleClose}>My account</MenuItem>
//   //       <MenuItem onClick={handleClose}>Logout</MenuItem>
//   //     </Menu>
//   //   </div>
//   // );
// // }

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import FormControl from '@mui/material/FormControl';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormLabel from '@mui/material/FormLabel';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import Switch from '@mui/material/Switch';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

// const StyledSpeedDial = styled(SpeedDial)(({ theme }) => ({
//   position: 'fixed',
//   '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
//     bottom: theme.spacing(2),
//     right: theme.spacing(2),
//   },
//   '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
//     top: theme.spacing(2),
//     left: theme.spacing(2),
//   },
// }));

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function PlaygroundSpeedDial() {
//   const [direction, setDirection] = React.useState('up');
//   const [hidden, setHidden] = React.useState(false);

//   const handleDirectionChange = (event) => {
//     setDirection(event.target.value);
//   };

//   const handleHiddenChange = (event) => {
//     setHidden(event.target.checked);
//   };

//   return (
//     <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
//       <FormControlLabel
//         control={
//           <Switch checked={hidden} onChange={handleHiddenChange} color="primary" />
//         }
//         label="Hidden"
//       />
//       <FormControl component="fieldset" sx={{ mt: 1, display: 'flex' }}>
//         <FormLabel component="legend">Direction</FormLabel>
//         <RadioGroup
//           aria-label="direction"
//           name="direction"
//           value={direction}
//           onChange={handleDirectionChange}
//           row
//         >
//           <FormControlLabel value="up" control={<Radio />} label="Up" />
//           <FormControlLabel value="right" control={<Radio />} label="Right" />
//           <FormControlLabel value="down" control={<Radio />} label="Down" />
//           <FormControlLabel value="left" control={<Radio />} label="Left" />
//         </RadioGroup>
//       </FormControl>
//       <Box sx={{ position: 'relative', mt: 3, height: 320 }}>
//         <StyledSpeedDial
//           ariaLabel="SpeedDial playground example"
//           hidden={hidden}
//           icon={<SpeedDialIcon />}
//           direction={direction}
//         >
//           {actions.map((action) => (
//             <SpeedDialAction
//               key={action.name}
//               icon={action.icon}
//               tooltipTitle={action.name}
//             />
//           ))}
//         </StyledSpeedDial>
//       </Box>
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function BasicSpeedDial() {
//   return (
//     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//       <SpeedDial
//         ariaLabel="SpeedDial basic example"
//         sx={{ position: 'absolute', bottom: 16, right: 16 }}
//         icon={<SpeedDialIcon />}
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//           />
//         ))}
//       </SpeedDial>
//     </Box>
//   );
// }

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import SpeedDial from '@mui/material/SpeedDial';
// import SpeedDialIcon from '@mui/material/SpeedDialIcon';
// import SpeedDialAction from '@mui/material/SpeedDialAction';
// import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
// import SaveIcon from '@mui/icons-material/Save';
// import PrintIcon from '@mui/icons-material/Print';
// import ShareIcon from '@mui/icons-material/Share';

// const actions = [
//   { icon: <FileCopyIcon />, name: 'Copy' },
//   { icon: <SaveIcon />, name: 'Save' },
//   { icon: <PrintIcon />, name: 'Print' },
//   { icon: <ShareIcon />, name: 'Share' },
// ];

// export default function BasicSpeedDial() {
//   return (
//     <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
//       <SpeedDial
//         ariaLabel="SpeedDial basic example"
//         sx={{ position: 'absolute', top: 16, left: 16 }} // Update the position to top: 16, left: 16
//         icon={<SpeedDialIcon openIcon={<SpeedDialIcon />} />} // Update the icon to open downwards
//         direction="down" // Set the direction to "down"
//       >
//         {actions.map((action) => (
//           <SpeedDialAction
//             key={action.name}
//             icon={action.icon}
//             tooltipTitle={action.name}
//           />
//         ))}
//       </SpeedDial>
//     </Box>
//   );
// }

import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function BasicSpeedDial() {
  return (
    <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 9999 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        icon={<SpeedDialIcon openIcon={<SpeedDialIcon />} />}
        direction="down"
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}
