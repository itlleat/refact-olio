import React from 'react';
import Typography from '@mui/material/Typography';
// import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import  "./Choose.css";
import "./Project.js";


export default function Choose({ isDarkMode }) {
    const containerClassName = `choose-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
     const textClassName = `choose-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 

return (


    <Card className={containerClassName}>
    <CardContent>
    <Typography gutterBottom variant="h3" component="div" className={textClassName}>
                The Story So Far
                </Typography> 
    <CardMedia className={"card-media"}>
    <div className="roddy"></div>
    </CardMedia>
      
    
     
  
       
            <Typography gutterBottom variant="h6" component="div" className={textClassName}>
                Depends on who tells it...
                </Typography> 
        </CardContent>
    </Card>

);
    }