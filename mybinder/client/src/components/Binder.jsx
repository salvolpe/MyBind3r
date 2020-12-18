import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Grid, Icon, Typography } from "@material-ui/core";

import sampleScript from "../assets/much_ado_3_1.png";

const Binder = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid
        className={classes.binder}
        container
        direction="row"
        justify="center"
      >
        <div className={classes.binderRingGroup}>
          <Icon
            style={{
              color: "#bababa",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            className="fas fa-circle-notch binderRing"
            fontSize="large"
          />
          <Icon
            style={{
              color: "#bababa",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            className="fas fa-circle-notch binderRing"
            fontSize="large"
          />
          <Icon
            style={{
              color: "#bababa",
              filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
            }}
            className="fas fa-circle-notch binderRing"
            fontSize="large"
          />
        </div>
        <Card className={classes.binderSpaceLeft} elevation={8}>
          <img className={classes.script} src={sampleScript} />
        </Card>
        <Card className={classes.binderSpaceRight} elevation={8}></Card>
      </Grid>
    </div>
  );
};

export default Binder;

const useStyles = makeStyles((theme) => ({
  binder: {
    paddingTop: 40,
    position: "relative",
  },
  binderSpaceLeft: {
    position: "absolute",
    minHeight: 845,
    minWidth: 653,
    right: 18,
    zIndex: -1,
    border: "1px solid #7c7c7c",
  },
  binderSpaceRight: {
    position: "absolute",
    minHeight: 845,
    minWidth: 653,
    left: 18,
    zIndex: -1,
    border: "1px solid #7c7c7c",
  },
  binderRing: {
    zIndex: 1,
  },
  binderRingGroup: {
    display: "flex",
    paddingTop: 30,
    minHeight: 800,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column",
  },
  script: {
    width: "100%",
    zIndex: 1,
  },
}));
