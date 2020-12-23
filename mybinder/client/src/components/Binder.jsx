import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Card, CardMedia, Grid, Icon, Typography } from "@material-ui/core";

import sampleScript from "../assets/much_ado_3_1.png";
import sampleScript2 from "../assets/much_ado_3_1_2.png";

class Binder extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const binder = {
      paddingTop: 40,
      position: "relative",
    }
    const binderSpaceLeft = {
      position: "absolute",
      minHeight: 845,
      maxHeight: 845,
      minWidth: 653,
      right: 18,
      zIndex: -1,
      border: "1px solid #7c7c7c",
    }
    const binderSpaceRight = {
      position: "absolute",
      minHeight: 845,
      maxHeight: 845,
      minWidth: 653,
      left: 18,
      zIndex: -1,
      border: "1px solid #7c7c7c",
    }
    const binderRing = {
      color: "#bababa",
      filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
      zIndex: 1,
    }
    const binderRingGroup = {
      display: "flex",
      paddingTop: 30,
      minHeight: 800,
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
    }
    const script = {
      width: "100%",
      zIndex: 1,
    }
    return (
      <div>
        <Grid
          style={binder}
          container
          direction="row"
          justify="center"
        >
          <div style={binderRingGroup}>
            <Icon
              className="fas fa-circle-notch"
              style={binderRing}
              fontSize="large"
            />
            <Icon
              className="fas fa-circle-notch"
              style={binderRing}
              fontSize="large"
            />
            <Icon
              className="fas fa-circle-notch"
              style={binderRing}
              fontSize="large"
            />
          </div>
          <Card style={binderSpaceLeft} elevation={8}>
            <img style={script} src={this.props.page} />
          </Card>
          <Card style={binderSpaceRight} elevation={8}></Card>
        </Grid>
      </div>
    );
  }
}

export default Binder;
