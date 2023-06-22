import React from "react";
import "./Project.css"; // Import the separate CSS file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

export default function Project({ isDarkMode }) {
  const containerClassName = `project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `project-text ${isDarkMode ? 'dark-text' : 'light-text'}`;

  return (
    <div className={containerClassName}>
      
        <Card className="project-card">
          <CardActionArea>
          <a href="https://mugshawtys.herokuapp.com/">
            <CardMedia
              height="140"
              alt="green iguana"
            />
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
                FUCK
              </Typography>
              <Typography variant="body2" className={textClassName}>
               AH SHIT AH FUCK AH SHIT AH FUCK AH SHIT AH FUCK AH SHIT AH FUCK 
               AH SHIT AH FUCK AH SHIT AH FUCK AH SHIT AH FUCK 
               AH SHIT AH FUCK AH SHIT AH FUCK AH SHIT AH FUCK 
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Shit
            </Button>
          </CardActions>
        </Card>
      
    </div>
  );
}



