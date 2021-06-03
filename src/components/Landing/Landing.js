import React from 'react';
import  "./Landing.css"
import ParticlesBg from 'particles-bg';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { SocialIcon } from 'react-social-icons';
import logo from './profilePic.jpg';


const useStyles = makeStyles({
    root: {
      marginTop: -40,
      maxWidth: 350,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, 0.9)',
      color: 'rgba(255, 99, 71, 1)',
    },
    media: {
      height: 350,
      marginTop: 50
    },
    button: {
      color: 'rgba(255, 99, 71, 1)',
      margin: 'auto'
    },
    Typography: {
        fontSize: 20
    }
  });

function Landing() {
    const classes = useStyles();
    
    return (
        <div className="LandingPage">
<Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={logo}
          title="Nick Reese"
        />
        <CardContent>
        <Typography gutterBottom variant="h4" component="h3">
            I'm Nick Reese
          </Typography> 
          <Typography variant="p" component="body2">
          I'm a Barberton based Full stack web developer leveraging my background as a musician, as well as my background in psychology to provide unique perspectives on how users interact with websites and software platforms. Earned a certificate in Full Stack Web Development from Case Western Reserve University Coding Boot Camp. Innovative problem-solver who is passionate about developing apps with a focus on mobile-first design and development. Strengths in creativity, teamwork, and building projects from ideation to execution.
          </Typography> 
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
        View on
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/COoCb02Hlv9/" />
      </CardActions> */}
    </Card>
         <ParticlesBg className="particles" type="circle"bg={true} />
        </div>
    )
}
export default Landing