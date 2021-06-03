import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import img from "./skyline.jpg";
import './Works.css'
import Carousel, { slidesToShowPlugin }  from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import logo from './weWatchHome1.png';
import logo2 from './employee_directory4.png';
import logo3 from './awty.png';
import logo4 from './dashboard.png';
import logo5 from './budget.png';
import logo6 from './Treasure_Trove.jpg';
import logo7 from './workDay.png';
import logo8 from './Slicecatering.jpg';
import { SocialIcon } from 'react-social-icons';
import ParticlesBg from 'particles-bg';

const useStyles = makeStyles({
    root: {
      // maxWidth: 400,
      margin: 'auto',
      backgroundColor: 'rgba(52, 52, 52, 1)',
      color: 'rgba(255, 99, 71, 1)'
    },
    media: {
      height: 240,
      marginTop: 50,
      backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    button: {
      color: 'rgba(255, 99, 71, 1)',
      margin: 'auto'
    }
  });

  function Works() {

    const classes = useStyles();
    return (
<div className="WorksPage">
    <div className="register-image" 
  
        style={{ 
              backgroundImage: `url(${img})` 
            }}
            >
             <div className= "row">
  <div className="contact-text">Check out some of my works below</div>
  </div>     

        <Carousel
        plugins={[
         'arrows',
         'infinite',
         {
           resolve: slidesToShowPlugin,
           options: {
            numberOfSlides: 3
           }
         },
       ]}
       breakpoints={{
         640: {
           plugins: [
             'arrows',
             'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 1
              }
            },
          ]
         },
         900: {
           plugins: [
             'arrows',
             'infinite',
            {
              resolve: slidesToShowPlugin,
              options: {
               numberOfSlides: 2
              }
            },
          ]
         }
       }}
           // value={this.state.value}
           // onChange={this.onChange}
         >
   
           <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo}
             title="weWatch"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               weWatch
             </Typography>MERN app allowing users to search and save their favorite shows, as well as follow their friends to see what they are watching
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/WeWatch" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://wewatch5000.herokuapp.com/" />
      </CardActions>
       </Card>  

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo8}
             title="SLICE Catering"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               S.L.I.C.E. Catering
             </Typography>React based website for my friend Chef Tig 
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/SLICE" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://cheftig.com/#/" />
      </CardActions>
       </Card>

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo2}
             title="Employee Directory"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Employee Directory 
             </Typography>A React based employee directory allowing users to sort and filter names and emails alphabetically.
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Employee_Directory" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://nwreese.github.io/Employee_Directory/" />
      </CardActions>
       </Card>  

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo3}
             title="Are We There Yet?"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Are We There Yet?
             </Typography>Travel planning app to help friends organize and plan ahead. Uses bcrypt, Express, MySQL, Sequelize, and passport 
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Are_We_There_Yet" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://arewethereyet.herokuapp.com/" />
      </CardActions>
       </Card>  

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo4}
             title="Workout Tracker"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Workout Tracker
             </Typography>Allows user to view and track their daily workouts using MongoDB, Mongoose and Express
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Workout-Tracker" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://evening-caverns-41968.herokuapp.com/?id=606610b5af242f00152f40af" />
      </CardActions>
       </Card>  

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo6}
             title="Treasure Trove"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Treasure Trove
             </Typography>App designed for treasure hunters to save the locations of their finds. Uses Bing Maps API and Unsplash API
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Treasure__Trove" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://jordanrantucci.github.io/Treasure_Trove/" />
      </CardActions>
       </Card>  

       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo5}
             title="Budget Tracker"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Budget Tracker
             </Typography>Online/Offline app that allows users to add deposits and expenses in order to store and track their budget. Uses indexedDb, Service Worker, Webpack, Mongo, Express, Morgan, Mongoose and Compression
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Budget_Tracker" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://guarded-ravine-68129.herokuapp.com/" />
      </CardActions>
       </Card>  


       <Card className={classes.root}>
         <CardActionArea>
           <CardMedia
             className={classes.media}
             image={logo7}
             title="Work Day Scheduler"
           />
           <CardContent>
             <Typography gutterBottom variant="h5" component="h2">
               Work Day Scheduler
             </Typography>Allows user to save events in each hour with colors changing depending on past, present, future. Uses JavaScript, HTML and CSS
             <Typography variant="body2" color="textSecondary" component="p">
              
             </Typography>
           </CardContent>
         </CardActionArea>
         <CardActions>
        View On
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://github.com/nwreese/Work_Day_Scheduler" />
      </CardActions>
      <CardActions>
        Live Link
        <br></br>
      <SocialIcon  bgColor="#F06000" style={{height: 30, width: 30}} url="https://nwreese.github.io/Work_Day_Scheduler/" />
      </CardActions>
       </Card>  

        

       </Carousel>
       </div>
       <ParticlesBg className="particles" type="circle"bg={true} />
       </div>
       
    )
  }
  export default Works