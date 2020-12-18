import React, { useState } from "react";
import {
  Button,
  Grid,
  GridList,
  Snackbar,
  makeStyles,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory, useParams } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";
import DirectoryTable from "../components/DirectoryTable";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const DirectoryPage = () => {
  const history = useHistory();
  const { user } = useParams();
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [severity, setSeverity] = useState("success");

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

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
            <Typography variant="h4" className={classes.title}>
              MyBind3r
            </Typography>
          </Button>
        </Grid>
        <Button
          onClick={async () => {
            await fetch("/auth/logout", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(),
            })
              .then((value) => {
                console.log(value.json()["message"]);
                setAlert("Successful logout!");
                setSeverity("success");
                setOpen(true);
                setTimeout(() => history.push("/"), 2000);
              })
              .catch((error) => {
                console.log("Error");
              });
          }}
          variant="outlined"
        >
          Sign Out
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {alert}
          </Alert>
        </Snackbar>
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
  left: {
    display: "flex",
    alignItems: "center",
  },
}));

export default DirectoryPage;
