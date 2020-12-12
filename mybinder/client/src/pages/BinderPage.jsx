import React from "react";
import { Grid, Typography } from "@material-ui/core";

import Binder from "../components/Binder";
import Header from "../components/Header";

const BinderPage = () => {
  return (
    <Grid container justify="center" direction="column">
      <Header />
      <Grid container justify="center" direction="row">
        <Binder />
      </Grid>
    </Grid>
  );
};

export default BinderPage;
