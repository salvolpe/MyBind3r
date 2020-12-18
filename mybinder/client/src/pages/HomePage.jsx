import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import {CopyrightIcon} from '@material-ui/icons/Copyright'; 
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";
import clip from "../assets/scene.png"; 

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.landingHeader}>
        <Grid className={classes.left}>
        <Button onClick={() => history.push("/")}>
          <img
            src={logo}
            width={80}
            height={80}
            alt="Logo: Stick figure reading binder with 3r on the inside"
          />
        </Button>
        <Typography variant="h4" className={classes.title}>MyBind3r</Typography>
        </Grid>
        <div className={classes.buttons}>
          <Button variant="outlined" onClick={() => history.push("/login")} className={classes.leftButton}>
            Sign In
          </Button>
          <Button variant="outlined" onClick={() => history.push("/sign-up")}>
            Sign-Up
          </Button>
        </div>
      </Grid>
      <div>
        <Grid className={classes.middleGrid}>
          <Grid className={classes.middleGridLeft}>
            <Typography className={classes.middleGridTextTop}>
              Your all-in-one script notation system.
              <Typography className={classes.middleGridTextBottom}>
                Tag, annotate, and collaborate on all your scripting needs with MyBind3r. The newest startup from Columbia University. 
              </Typography>
            </Typography>
          </Grid>
          <img
           src={clip}
           max-width='80%'
           height='auto'
           />
        </Grid>

      </div>
      <div>
        <div className={classes.bottomGrid}>
          <Typography>
             &copy; Unicorns, LLC
          </Typography>
        </div>

      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  landingHeader: {
    display: "flex",
    height: 90,
    borderBottom: "1px solid #7C7C7C",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: '5.25%',
    paddingLeft: '3.0%',
  },
  
  left: {
    display: "flex", 
    alignItems: "center",
  },

  title: {
    paddingTop: 10
  },

  buttons: {
    paddingTop: 9
  },

  leftButton: {
     marginRight:8
  }, 

  rightButton: {
    marginRight:8
  }, 

  middleGrid: {
    display: "flex", 
    justifyContent: "space-between", 
    alignItems:"center", 
  },

  middleGridTextTop: {
    marginTop:-40,
    width: 478,
    heigth: 135,
    fontSize: 48,
    lineHeight: '116%'
  },

  middleGridTextBottom: {
    paddingTop:15,
    width: 512,
    fontSize: 36,
    lineHeight:'120%',
    color: '#9D9D9D'

  },

  middleGridLeft: {
    marginRight: 30,
    display: "flex", 
    justifyContent: "center",
    paddingLeft: 50
  },

  bottomGrid: {
    height: 90,
    borderTop: "1px solid #7C7C7C",
    display: "flex", 
    alignItems: "center",
    justifyContent: "center"
  }
  
}));

export default HomePage;
