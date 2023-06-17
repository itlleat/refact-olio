import React from "react";
// import servericon from "./images/ProjectIcon"; 
import "./Project.css";
import StorageIcon from '@mui/icons-material/Storage';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


// export default function Project() {
//     const projects = [
//         {
            
//             name: "SVG Creator",
//             gh: "https://github.com/itlleat/commander-shape",
//             desc: "Terminal-run application for creating custom svg logos",
//             bg: StorageIcon
           
//         }, 
//         {
//             name: "Social Network API",
//             gh: "https://github.com/itlleat/mongo-mango-social-club",
//             desc: "Custom API for the back-end of a social media app"
//             // bg: ,
//             // link: ""
//         }, 
//         {
//             name: "PWA Text Editor",
//             gh: "https://github.com/itlleat/text-cairn",
//             desc: "Custom API for the back-end of a social media app",
//             // bg: ,
//             link: "https://text-cairn.herokuapp.com/"
//         }, 
//         {
//             name: "PWA Text Editor",
//             gh: "https://github.com/itlleat/text-cairn",
//             desc: "Custom API for the back-end of a social media app",
//             // bg: ,
//             link: "https://text-cairn.herokuapp.com/"
//         }, 
//         {
//             name: "PWA Text Editor",
//             gh: "https://github.com/itlleat/text-cairn",
//             desc: "Custom API for the back-end of a social media app",
//             // bg: ,
//             link: "https://text-cairn.herokuapp.com/"
//         }, 
//         {
//             name: "PWA Text Editor",
//             gh: "https://github.com/itlleat/text-cairn",
//             desc: "Custom API for the back-end of a social media app",
//             // bg: ,
//             link: "https://text-cairn.herokuapp.com/"
//         }, 
//     ];

//     const projectList = projects.map((project, index) => {
//         return (
//             <div className="project" key={project.desc} 
//             style={{backgroundImage: `(${project.bg})`}}
//             >
//                     <div className="project-writing">
                     
//                         <h3>{project.name}</h3>
//                         <p>______________</p>
//                         <p>{project.desc}</p>
//                     </div>
//                     <div className="links">
//                         <a href={project.link}>
//                             Deployed
//                         </a>
//                         <a href={project.gh}>
//                         <img className="projectLogo" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" />
//                         </a>
//                     </div>
//             </div>
//         )});
    
//         return (
//             <div className="project-container">
//                 {projectList}
//             </div>
//         );
//     };
export default function Project() {
    return (
        <>
      <Card sx={{ maxWidth: 2000, background: 'radial-gradient(at bottom left, rgba(255, 255, 255, 0.5), transparent)', marginLeft: '5rem', marginTop: '2rem' }}>
        <CardActionArea>
          <CardMedia
            // component="img"
            height="140"
            // image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over 6,000
              species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card >

<Card sx={{ maxWidth: 2000, background: 'radial-gradient(at bottom right, rgba(255, 255, 255, 0.5), transparent)', marginRight: '5rem', marginTop: '2rem' }}>
  <CardActionArea>
    <CardMedia
      // component="img"
      height="140"
      // image="/static/images/cards/contemplative-reptile.jpg"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div" align="right">
        Lizard
      </Typography>
      <Typography variant="body2" color="text.secondary" align="right">
        Lizards are a widespread group of squamate reptiles, with over 6,000
        species, ranging across all continents except Antarctica
      </Typography>
    </CardContent>
  </CardActionArea>
  <CardActions style={{ justifyContent: 'flex-end' }}>
    <Button size="small" color="primary">
      Share
    </Button>
  </CardActions>
</Card>

 </>
    );
  }