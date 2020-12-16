import React from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";

const HomePage = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div>
      <Grid className={classes.landingHeader}>
        <Button onClick={() => history.push("/")}>
          <img
            src={logo}
            width={80}
            height={80}
            alt="Logo: Stick figure reading binder with 3r on the inside"
          />
        </Button>
        <Typography>Hi! I'm the home page!</Typography>
        <div>
          <Button variant="outlined" onClick={() => history.push("/login")}>
            Log In
          </Button>
          <Button variant="outlined" onClick={() => history.push("/sign-up")}>
            Sign-Up
          </Button>
        </div>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  landingHeader: {
    display: "flex",
    height: 90,
    borderBottom: "1px solid black",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default HomePage;
