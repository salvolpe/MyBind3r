import React from "react";
import {
  Button,
  Grid,
  GridList,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";
import DirectoryTable from "../components/DirectoryTable";

const DirectoryPage = () => {
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
        <Button variant="outlined">Sign Out</Button>
      </Grid>
      <Grid container direction="row">
        <Grid item xs container direction="column">
          <Typography>Scripts</Typography>
        </Grid>
        <Grid item>
          <DirectoryTable />
        </Grid>
      </Grid>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 500,
    height: 450,
  },
  landingHeader: {
    display: "flex",
    height: 90,
    borderBottom: "1px solid black",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default DirectoryPage;
