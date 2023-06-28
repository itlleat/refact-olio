
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
        title="H.G. Wells"
        subheader="24 July 1802"
      />
      </div>
      <CardMedia className='bgimg'
        component="img"
        height="194"
        image={require('./images/hgwells.jpg')}
        alt="hgwells"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Pioneering British writer, known as the "father of science fiction," and author of influential works like "The War of the Worlds" and "The Time Machine."
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
          In the realm of Denver, amidst the bustling cityscape where the wonders of progress and the spirit of human endeavor converge, a figure of thirty-five years emerged. Born into the fabric of this vibrant city, a tale of intellectual curiosity and visionary insights began to unfold.
In the formative years of their youth, accompanied by a younger sibling, this inquisitive soul embarked on a journey, forging trails through the untamed landscapes of Jefferson County Open Space. With hands that embraced both the serenity of nature and the tools of human craftsmanship, they carved pathways that merged the timeless beauty of the natural world with the boundless potential of human ingenuity, leaving a lasting impression upon the terrain.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottmetal.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          Yet, within the depths of their being, a different kind of curiosity stirred—a curiosity that sought to unravel the mysteries of existence and to envision the realms yet unexplored. Amidst the ever-evolving symphony of scientific discoveries, a master of ideas emerged, orchestrating intellectual endeavors that challenged the boundaries of human knowledge. Driven by an insatiable thirst for understanding and a profound belief in the transformative power of imagination, they endeavored to shape the future, weaving a tapestry of ideas that transcended the confines of the present.
However, the currents of destiny took an unforeseen turn, as a global tempest known as Covid-19 cast its shadow upon the world, disrupting the course of human affairs. In the face of adversity, the spirit turned towards the realm of law, enrolling in a paralegal program, drawn to the pursuit of justice and the principles that underpin a just society. Yet, the call of intellectual exploration persisted, its echo reverberating within their mind.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/koda.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          Fate guided the soul back to their hometown, where the bonds of family beckoned with tender urgency. Drawing upon two decades of intermittent experience in the realm of food service, they found solace in the art of sustenance. As a chef for the YMCA in Deckers and a weekend bartender at a local establishment, they served nourishment and libations that provided respite and nurtured the spirit of those who sought comfort amidst the trials of life.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottrmnp.jpg')}
        alt="metal"
      />
          <Typography>
          Yet, within the chambers of their creative mind, an ember of intellectual pursuit flickered—a flame that yearned to be rekindled. The enigmatic realm of programming beckoned, its digital landscapes offering a canvas for intellectual exploration. Fresh from a full-stack web development program at the esteemed University of Denver, they emerged, their mind ablaze with the intricacies of code, poised to traverse the technological frontier in pursuit of knowledge and innovation.
Armed with professionalism as their guiding principle, collaboration as their intellectual companion, leadership as their guiding star, and technical proficiency as their instrument, this intrepid soul embarks on a new chapter of intellectual adventure. A world of boundless possibilities awaits, where their intellectual acumen shall merge with the realms of technology, propelling humanity towards new horizons of discovery. Raise your minds, my fellow seekers of truth, for behold the emergence of an intellectual luminary—a harbinger of ideas, ready to leave an indelible mark upon the annals of human thought.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

   
    </div>
  );
}