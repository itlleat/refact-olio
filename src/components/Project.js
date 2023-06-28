import React from "react";
// import 'normalize.css';
import "./Project.css"; // Import the separate CSS file
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';




export default function Project({ isDarkMode }) {
 const containerClassName = `project-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
  const textClassName = `project-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 

  return (
    <div className={containerClassName}>
      
        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/mongo-mango-social-club">
          <div className="card-media">
        <div className="background-image-1"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               Mongo Mango Social Club
              </Typography>
              <Typography variant="body2" className={textClassName}>
              API for a social network that lets users select friends, 
              share thoughts, and share reactions to others thoughts.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/mongo-mango-social-club">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>
      
        <Card className="project-card">
          <CardActionArea>
          <a href="https://text-cairn.herokuapp.com/">
          <div className="card-media">
        <div className="background-image-2"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               Text Cairn
              </Typography>
              <Typography variant="body2" className={textClassName}>
              PWA text editor for flexibility and ease of use.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/mongo-mango-social-club">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>

        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/ethical-capitalism-simulator">
          <div className="card-media">
        <div className="background-image-3"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
               Ethical Capitalism Simulator
              </Typography>
              <Typography variant="body2" className={textClassName}>
              Backend for an e commerce site using MySQL and express.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/ethical-capitalism-simulator">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>

        <Card className="project-card">
          <CardActionArea>
          <a href="https://github.com/itlleat/biz-bank/tree/main">
          <div className="card-media">
        <div className="background-image-4"> 
        </div>
      </div>
            </a>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" className={textClassName}>
              4. Biz Bank
              </Typography>
              <Typography variant="body2" className={textClassName}>
              CMS application designed to help non-developers interact with and view information stored in databases with ease.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
          <CardActionArea>
            <a className="repo-link" href="https://github.com/itlleat/biz-bank/tree/main">
                    <img className="logo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
                </a>
                </CardActionArea>
          </CardActions>
        </Card>
       
    </div>
  );
}




