import React, { useState, Component } from "react";
import { Button, Grid, Typography } from "@material-ui/core";

import Binder from "../components/Binder";
import Header from "../components/Header";
import EditableText from "../components/EditableText";


class BinderPage extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        numNotes: 0
      };
  }

  addNote = () => {
    this.setState({numNotes: this.state.numNotes + 1});
  }

  render() {
    const notes = [];
    for (var i = 0; i < this.state.numNotes; i += 1) {
      notes.push(<EditableText />);
    };
    console.log(notes.length);

    return (

      <Grid container justify="center" direction="column">
        <Header />
        <Grid container justify="center" direction="row">
          <Button onClick={this.addNote}>
          <Binder/>
          </Button>
          {notes}
        </Grid>
      </Grid>
    );
  }
}

export default BinderPage;
