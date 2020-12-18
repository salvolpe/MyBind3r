import React, { useState } from "react";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  makeStyles,
  Typography
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";
import clip from "../assets/scene.png";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [severity, setSeverity] = useState("success");
  const classes = useStyles();

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
        </Button>
        <Typography variant="h4" className={classes.title}>MyBind3r</Typography>
        </Grid>
        <div className={classes.buttons}>
          <Button variant="outlined" onClick={() => history.push("/login")} className={classes.leftButton}>
            Sign In
          </Button>
          <Button variant="outlined" onClick={() => history.push("/sign-up")}>
            Sign-Up
          </Button>
        </div>
      </Grid>
      <Grid container direction="column">
        <form noValidate>
          <TextField
            required
            type="email"
            id="email"
            label="Email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            required
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button
          variant="outlined"
          onClick={async () => {
            const user = { email, password };
            const response = await fetch("/auth/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((response) => response.json())
              .then((data) => {
                if (data.message != null) {
                  console.log("Success:", data);
                  setAlert(data.message);
                  setSeverity("success");
                  setOpen(true);
                  setTimeout(() => history.push("/directory"), 3000);
                } else {
                  console.error("Error:", data.error);
                  setAlert(data.error);
                  setSeverity("error");
                  setOpen(true);
                }
              });
          }}
        >
          Log In
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {alert}
          </Alert>
        </Snackbar>
      </Grid>
      <div>
      <Typography className={classes.bottomGrid}> 
             &copy; Unicorns, LLC
          </Typography>
      </div>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  landingHeader: {
    display: "flex",
    height: 90,
    borderBottom: "1px solid #7C7C7C",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: '5.25%',
    paddingLeft: '3.0%',
  },
  
  left: {
    display: "flex", 
    alignItems: "center",
  },

  title: {
    paddingTop: 10
  },

  buttons: {
    paddingTop: 9
  },

  leftButton: {
     marginRight:8
  }, 

  rightButton: {
    marginRight:8
  },   

  bottomGrid: {
    height: 90,
    borderTop: "1px solid #7C7C7C",
    display: "flex", 
    alignItems: "center",
    justifyContent: "center"
  }
  
}));

export default LoginPage;
