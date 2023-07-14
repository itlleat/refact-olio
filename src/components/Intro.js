


import React from 'react';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import  "./Intro.css";
import "./Project.js";


export default function Choose({ isDarkMode }) {
    const containerClassName = `intro-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
     const textClassName = `intro-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 

return (


    <Card className={containerClassName}>
    <CardContent>
    <Typography gutterBottom variant="h2" component="div" className={textClassName}>
                Scott Schulman
                </Typography> 

      
    
     
  
       
            <Typography gutterBottom variant="h6" component="div" className={textClassName}>
                Full Stack Developer 
                </Typography> 
        </CardContent>
    </Card>

);
    }