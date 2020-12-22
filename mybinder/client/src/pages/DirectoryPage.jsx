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
import panel from "../assets/side_panel.png"

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
        <Button className={classes.buttons}
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
          Log Out
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {alert}
          </Alert>
        </Snackbar>
      </Grid>
      <Grid className={classes.middleGrid}>
        <div className={classes.middleGridLeftContainer}>
        <img src={panel} max-width="100%" height="auto" />
        </div>
        <div className={classes.middleGridRightContainer}>
          <div className={classes.middleGridAround}></div>
          <DirectoryTable />
          <div className={classes.middleGridAround}></div>
        </div>
      </Grid>
      <div>
      <div className={classes.bottomGrid}>
      <Typography>&copy; Unicorns, LLC</Typography>
      </div>
    </div>
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
    borderBottom: "1px solid  #7C7C7C",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "5.25%",
    paddingLeft: "3.0%",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    paddingTop: 10,
    textTransform: "none"
  },

  buttons: {
    marginTop:9,
    width: 113,
    textAlign: "center"
  }, 

  middleGrid: {
      display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },   
  
  middleGridLeftContainer: {
    display: "flex", 
    justifyContent: "center",
    alignItems: "center"

  }, 

  middleGridRightContainer: {
    display: "flex", 
    backgroundColor: " rgba(205, 205, 205, 0.6)",
    justifyContent: "center", 
    alignItems: "center",
    width: "80%",
    height: "844px",
    flexDirection: "column"
  },

  bottomGrid: {
    height: 90,
    borderTop: "1px solid #7C7C7C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  middleGridAround: { 
    backgroundColor: "rgba(205, 205, 205, 0.6)",
    height: 190
  }

}));

export default DirectoryPage;
