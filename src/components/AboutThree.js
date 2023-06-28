
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './About.css';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

export default function AboutTwo({ isDarkMode }) {
    const [expanded, setExpanded] = React.useState(false);
    const containerClassName = `about-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`;
       const textClassName = `about-text ${isDarkMode ? 'dark-text' : 'light-text'}`; 
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
  
  
    return (
        <div className={containerClassName}>
    <Card sx={{ maxWidth: 345 }}>
      <div className={textClassName}>
      <CardHeader className={textClassName}
        title="Mary Shelley"
        subheader="24 July 1802"
      />
      </div>
      <CardMedia className='bgimg'
        component="img"
        height="194"
        image={require('./images/mary.jpg')}
        alt="maryshelley"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        British author who penned the iconic novel "Frankenstein," exploring themes of creation, ambition, and the consequences of playing god.
        </Typography>
      </CardContent>

      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
    
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <CardMedia
        component="img"
        height="194"
        image={require('./images/scottrob.jpg')}
        alt="scottrob"
      />
          <Typography paragraph>
          In the mystical embrace of Denver, where nature's wonders stir the imagination, a figure of thirty-five years materialized, born amidst the ethereal realm of that enchanting city. Within the depths of their existence, a tale of profound introspection and literary prowess took root.
During the transformative years of youth, accompanied by a younger sibling, this dauntless soul embarked on a quest of discovery, blazing trails through the captivating landscapes of Jefferson County Open Space. With skillful hands and an unwavering spirit, they carved pathways that intertwined with the natural tapestry, crafting a legacy destined to endure the tests of time.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottmetal.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          Yet, the chambers of their heart harbored a different kind of yearning—a yearning to give voice to the arcane mysteries that danced within their imagination. Amidst the tumultuous symphony of life's endeavors, a maestro of projects emerged, orchestrating dreams upon the stage of creation. Driven by a relentless passion, they pursued the elusive artistry of heavy metal, where thunderous melodies and evocative lyrics resonated with the depths of the soul.
Alas, the veil of destiny would part, revealing a new path forged amidst the trials of a global scourge known as Covid-19. In the face of adversity, the spirit sought solace within the realms of law, enrolling in a paralegal program, aspiring to navigate the intricate corridors of justice. Yet, the realm of words and ink, akin to alchemical potions, beckoned them with an irresistible allure.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/koda.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          The threads of fate wove a different tapestry, summoning the soul back to their ancestral abode, where familial bonds demanded their tender care. Drawing upon a wealth of experience in the realm of gastronomy, amassed over two decades of intermittent service, they found solace in the realm of culinary arts. As a chef for the YMCA in Deckers and a weekend bartender at a local establishment, they stirred potions of flavor and poured libations to satiate the thirst of kindred souls.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottrmnp.jpg')}
        alt="metal"
      />
          <Typography>
          Yet, within the depths of their being, a dormant flame flickered—a flame eager to be kindled. The enigmatic world of programming whispered its siren song, enticing the soul into uncharted territories. Fresh from the crucible of a full-stack web development program at the esteemed University of Denver, they emerged, their mind ablaze with the intricacies of code, poised to shape digital realms with their visionary touch.
Armed with professionalism as their compass, teamwork as their guiding star, leadership as their quill, and technical prowess as their ink, this intrepid spirit embarks upon a new chapter. A symphony of possibilities awaits, where their literary spirit shall find expression in the ethereal domains of code and design. Raise your glasses, dear companions, for behold the emergence of a luminary—a weaver of tales, ready to etch their mark upon the annals of creativity.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

   
    </div>
  );
}