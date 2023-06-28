
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

export default function About({ isDarkMode }) {
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
        title="Alexandre Dumas"
        subheader="24 July 1802"
      />
      </div>
      <CardMedia 
        className='bgimg'
        component="img"
        height="194"
        image={require('./images/Alexander_Dumas_père_par_Nadar_-_Google_Art_Project.jpeg')}
        alt="dumas"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        Celebrated French author known for his historical novels, including "The Three Musketeers" and "The Count of Monte Cristo."
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
          In the vast tapestry of existence, amidst the lofty peaks of Denver and the tranquil embrace of untamed woods, a prodigious spirit was conceived. Thirty-five cycles of the sun have graced this mortal vessel, a vessel nurtured by the wild splendor of the foothills. Born in Denver and reared amidst the sylvan wonders, a tale of fortitude and familial bond unfolds.
During the luminous years of youth, this dauntless soul, accompanied by a younger sibling, embarked on a noble quest, forging trails through the fertile expanses of Jefferson County Open Space. With their skilled hands and unwavering dedication, they gifted the land with pathways, an enduring legacy that continues to grace the footsteps of those who wander to this day.  
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottmetal.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          Yet, the tempestuous passions of youth beseeched this intrepid being, as dreams of heavy metal melodies beckoned with an irresistible allure. In the midst of construction's tumultuous dance, a maestro of project management emerged, harmonizing his ardor for the cacophony of thunderous chords and the euphoria of serenading ardent crowds.
Alas, the tides of fate took an unforeseen turn when a global scourge known as Covid-19 emerged from the shadows.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/koda.jpg')}
        alt="metal"
      />
          <Typography paragraph>
          With a profound change of heart, this valiant spirit sought solace in the halls of legal knowledge, enrolling in a paralegal program with hopes of gracing the esteemed corridors of law school. Yet, life's intricate labyrinth, shaped by forces beyond mortal comprehension, had more intricate designs in store.
The winds of adversity whispered of ailing health that befell the narrator's father, a clarion call that summoned this steadfast soul back to the familiar embrace of their hometown. Adhering to a legacy spanning two decades in the culinary arts, the kitchen became a sanctuary, a realm where flavors danced in symphonic unison, caressing palates and soothing souls. The YMCA in Deckers became witness to the gastronomic prowess of this master of culinary finesse, while the local watering hole was imbued with their bartending artistry, satiating the thirst of patrons' desires.
          </Typography>
          <CardMedia
        component="img"
        height="194"
        image={require('./images/scottrmnp.jpg')}
        alt="metal"
      />
          <Typography>
          Yet, amidst these earthly pursuits, a latent yearning for the enigmatic realm of programming germinated within. The intricate language of algorithms and the logic of code whispered promises of untapped possibilities. Thus, with unwavering resolve, this audacious spirit cast aside the robes of jurisprudence and embarked on a pilgrimage of full-stack web development, guided by the hallowed halls of the University of Denver.
Emerging from this crucible of enlightenment, armed with an arsenal of professionalism, an affinity for collaboration, the acumen of leadership, and an adeptness in technical proficiency, this indomitable soul stands at the threshold of a new epoch. A symphony of promise awaits, with each keystroke and line of code, weaving a narrative of triumph and innovation, resonating through the corridors of time. Raise your glasses, dear companions, for behold the birth of a legend, destined to carve its name upon the annals of history.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>

    </div>
  );
}


   
   
   
   