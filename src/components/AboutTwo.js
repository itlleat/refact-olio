
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
      
    <Card className={containerClassName}sx={{ maxWidth: 345 }}>
      
      <CardHeader className={textClassName}
        title="H.P. Lovecraft"
        subheader="24 July 1802"
      />
  
      <CardMedia className='bgimg'
        component="img"
        height="194"
        image={isDarkMode ? require('./images/2shoggoth.jpeg') : require('./images/lovecraft.jpg')}
        alt="lovecraft"
      />

      <CardContent>
        <Typography className={textClassName} variant="body2" color="text.secondary">
        American writer known for his influential works of horror fiction, creating the Cthulhu Mythos and inspiring a generation of authors in the genre.
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
          <Typography className={textClassName} paragraph>
          In the somber depths of Denver, where shadows whisper ancient secrets, a figure of thirty-five years emerged from the darkened mists. Born within the confines of that enigmatic city, a tale of otherworldly dread and cosmic revelations took shape.
During the formative years of youth, alongside a younger sibling, this intrepid soul embarked upon a mysterious pilgrimage, forging trails through the unfathomable reaches of Jefferson County Open Space. With hands touched by both mortal and eldritch powers, they carved pathways that intertwined with the hidden realms, beckoning wanderers to tread upon them, ignorant of the horrors that lie beyond.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottmetal.jpg')}
        alt="metal"
      />
          <Typography className={textClassName} paragraph>
          Yet, as the eldritch harmonies whispered in their blood, their heart yearned for a different symphony—a symphony composed of nightmarish chords and haunting melodies. Amidst the cacophony of earthly construction, a master of projects emerged, orchestrating visions that danced on the precipice of sanity, driven by a fervent desire to summon forth the abominations of a darkened stage, where eerie riffs and discordant harmonies reigned supreme.
But as the celestial dance waned and earthly chaos ensued, a shroud of pestilence descended upon the world—the harbingers of Covid-19. In the face of this insidious scourge, the soul chose a different path, venturing into the realms of law, enrolling in a paralegal program, hoping to unravel the mysteries of justice. Yet, as they delved deeper into the maddening depths, the veil of reality began to unravel, revealing glimpses of a hidden truth beyond human comprehension.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/koda.jpg')}
        alt="metal"
      />
          <Typography className={textClassName} paragraph>
          The tendrils of destiny entwined with the threads of familial obligation, drawing the soul back to their ancestral domain, where paternal affliction demanded their presence. With twenty-one years of intermittent experience in the realm of culinary arts, they found solace amidst the aromatic incantations of the kitchen. As a chef for the YMCA in Deckers and a weekend sorcerer behind the bar of a local tavern, they wove spells of gastronomic delight and poured libations to soothe the weary souls who sought refuge within those hallowed walls.
Yet, within the labyrinthine corridors of their being, a primal yearning stirred—a yearning for the arcane mysteries of code and the digital expanse. The whispers of forbidden knowledge beckoned, seducing the soul into the realm of programming. Fresh from the crucible of a full-stack web development program at the University of Denver, they emerged, their mind ablaze with cryptic symbols and algorithms, ready to transmute the virtual realm into a macabre symphony of pixels and lines.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottrmnp.jpg')}
        alt="metal"
      />
          <Typography className={textClassName}>
          Now, armed with a darkened professionalism, a willingness to explore the eldritch depths of teamwork, an ancient leadership bestowed by forgotten gods, and an eerie proficiency in technical sorcery, this indomitable spirit stands poised on the precipice of a new era. They shall traverse digital realms where sanity unravels and the borders of reality fade into oblivion. Raise your chalices, my companions, for behold the emergence of a new protagonist—a vessel through which the unspeakable tales of their own creation shall be etched upon the cosmic fabric.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

   

  );
}