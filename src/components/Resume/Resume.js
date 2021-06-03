import logo from './showPic.jpg';
import './Resume.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import img from "./pelican.jpg";
import ParticlesBg from 'particles-bg';
import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { SocialIcon } from 'react-social-icons';

const useStyles = makeStyles({
    root: {
      maxWidth: 350,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, 0.9)',
      color: 'rgba(255, 99, 71, 1)',
      display: 'flex'
    },
    media: {
      height: 200,
      marginTop: 50,
    },
    button: {
      color: 'rgba(255, 99, 71, 1)',
      margin: 'auto'
    }
  });

  const theme = createMuiTheme({
    typography: {
      // In Chinese and Japanese the characters are usually larger,
      // so a smaller fontsize may be appropriate.
      fontSize: 50,
    },
  });

function Resume() {
    const classes = useStyles();
   
    return (
        <div>
       <div className="background-image" style={{ 
                  backgroundImage: `url(${img})` 
                }}>
        <div className="ResumePage">
      <Card className={classes.root}>
        <CardActionArea>
        <Typography gutterBottom variant="h5" component="h2">
                            Resume: <SocialIcon  style={{height: 34, width: 34}} url="https://docs.google.com/document/d/1wqsUhS8Y8reuFTAp2vfBLORTttH04u9yGSMa9J0HQaQ/edit?usp=sharing" />
              </Typography>
              <br></br>
               <SocialIcon  bgColor="#F06000" style={{height: 34, width: 34}} url="https://github.com/nwreese" />
              <SocialIcon   style={{height: 33, width: 33}} url="https://www.linkedin.com/in/nick-reese-fullstackwebdev/" />
              <SocialIcon   style={{height: 32, width: 32}} url="https://open.spotify.com/artist/4GGXD4wkhELLmPA3sTKHDD?si=KwDCGYhBRNGDRWQ08n32Ow" />
              <SocialIcon  bgColor="#F06000" style={{height: 31, width: 31}} url="https://www.instagram.com/walkinshred/" />
          <CardMedia
            className={classes.media}
            image={logo}
            title="Resume"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Case Western Reserve University
            </Typography>Certificate, Full Stack Web Development. May 2021
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Kent State University
            </Typography>Psychology. Started in nursing and then switched to psychology. Still need 30 credit hours to finish
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              On Call Catering
            </Typography>Started at prep and worked my way up to a managerial position, in charge of cold foods ordering and storage
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
             Musician
            </Typography>Multi-instrumentalist and vocalist who has performed, recorded and toured with multiple bands
            <Typography variant="body2" color="textSecondary" component="p">
            </Typography>
          </CardContent>
        </CardActionArea>
        {/* <CardActions>
          View on
          <br></br>
        <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://www.instagram.com/p/COoCb02Hlv9/" />
        </CardActions> */}
      </Card>
      </div>
      </div>
      <ParticlesBg className="particles1" type="circle"bg={true} />
      </div>
    );
  }
  
  export default Resume;
  