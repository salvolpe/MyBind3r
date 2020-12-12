import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card, Grid, Typography } from "@material-ui/core";

const Binder = () => {
  const classes = useStyles();
  return (
    <Grid container direction="row" justify="center">
      <Card className={classes.binderSpace} elevation={8}>
        <Typography variant="h1">Hello</Typography>
      </Card>
      <Card className={classes.binderSpace} elevation={8}>
        <Typography variant="h2">We will become a binder</Typography>
      </Card>
    </Grid>
  );
};

export default Binder;

const useStyles = makeStyles((theme) => ({
  binderSpace: {
    minHeight: 845,
    minWidth: 653,
  },
}));
