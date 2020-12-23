import React, { useState, Component } from "react";
import { Button, Grid, makeStyles, Typography } from "@material-ui/core";

import Binder from "../components/Binder";
import Header from "../components/Header";
import EditableText from "../components/EditableText";
import forwardArrow from "../assets/forward_arrow.png";
import backArrow from "../assets/back_arrow.png";
import sampleScript from "../assets/much_ado_3_1.png";
import sampleScript2 from "../assets/much_ado_3_1_2.png";
import LoadingScreen from "../components/LoadingScreen"; //currently not used

class BinderPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numNotes: 0,
      page: sampleScript,
      loading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.state.loading = false;
    }, 6000);
  }

  addNote = () => {
    this.setState({ numNotes: this.state.numNotes + 1 });
  };

  previousPage = () => {
    this.setState({ page: sampleScript });
  };

  nextPage = () => {
    this.setState({ page: sampleScript2 });
  };

  render() {
    const notes = [];
    for (var i = 0; i < this.state.numNotes; i += 1) {
      notes.push(<EditableText />);
    }
    console.log(notes.length);
    const arrowFooter = {
      display: "flex",
      height: 90,
      borderBottom: "1px solid  #7C7C7C",
      justifyContent: "space-between",
      alignItems: "center",
      paddingRight: "5.25%",
      paddingLeft: "5.25%",
    };
    const left = {
      display: "flex",
      alignItems: "center",
    };
    return (
      <>
        {this.state.loading === false ? (
          <Grid container justify="center" direction="column">
            <Header />
            <Grid container justify="center" direction="row">
              <Binder page={this.state.page} />
            </Grid>
            <Grid style={arrowFooter}>
              <Grid style={left}>
                <Button onClick={this.previousPage}>
                  <img src={backArrow} />
                </Button>
              </Grid>
              <Button onClick={this.nextPage}>
                <img src={forwardArrow} />
              </Button>
            </Grid>
          </Grid>
        ) : (
          <LoadingScreen />
        )}
      </>
    );
  }
}

export default BinderPage;
