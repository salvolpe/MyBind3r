import React, { useState } from "react";
import { Grid, Typography } from "@material-ui/core";

import Binder from "../components/Binder";
import Header from "../components/Header";
import EditableText from "../components/EditableText";

const BinderPage = () => {
  const [notes, addNote] = useState([]);
  return (
    <Grid container justify="center" direction="column">
      <Header />
      <Grid container justify="center" direction="row">
        <Binder />
      </Grid>
      <EditableText />
    </Grid>
  );
};

export default BinderPage;
