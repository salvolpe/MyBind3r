import React, { useState } from "react";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
  makeStyles,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Link } from "../utils/react-router";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";
import clip from "../assets/scene.png";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SignUpPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
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
            <Typography variant="h4" className={classes.title}>
              MyBind3r
            </Typography>
          </Button>
        </Grid>
        <div className={classes.buttons}>
          <Link className={classes.buttonLink} to={"/login"}>
            <Button variant="outlined" className={classes.leftButton}>
              Log In
            </Button>
          </Link>
          <Link className={classes.buttonLink} to={"/sign-up"}>
            <Button variant="outlined">Sign-Up</Button>
          </Link>
        </div>
      </Grid>
      <div>
        <Grid className={classes.middleGrid}>
          <Grid className={classes.middleGridLeftContainer}>
            <Typography className={classes.createMessage}>
              Create Your Account
            </Typography>
            <form noValidate>
              <TextField
                className={classes.userInput}
                required
                id="firstname"
                label="First Name"
                variant="outlined"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </form>
            <form noValidate>
              <TextField
                className={classes.userInput}
                required
                id="lastname"
                label="Last Name"
                variant="outlined"
                onChange={(e) => setLastName(e.target.value)}
              />
            </form>
            <form noValidate>
              <TextField
                className={classes.userInput}
                required
                type="email"
                id="email"
                label="Email"
                variant="outlined"
                onChange={(e) => setEmail(e.target.value)}
              />
            </form>
            <form noValidate>
              <TextField
                className={classes.userInput}
                required
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                onChange={(e) => setPassword(e.target.value)}
              />
            </form>
            <form noValidate>
              <TextField
                className={classes.userInputBottom}
                required
                id="repeat-password"
                label="Re-enter password"
                type="password"
                variant="outlined"
                onKeyDown={async (e) => {
                  if (e.key === "Enter") {
                    document.getElementById("register").click();
                  }
                }}
              />
            </form>
            <Button
              className={classes.registerButton}
              id="register"
              variant="outlined"
              onClick={async () => {
                const user = { email, password, firstname, lastname };
                const name = email.substring(0, email.indexOf("@"));
                const response = await fetch("/auth/register", {
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
                      setTimeout(
                        () => history.push(`/${name}/directory`, name),
                        3000
                      );
                    } else {
                      console.error("Error:", data.error);
                      setAlert(data.error);
                      setSeverity("error");
                      setOpen(true);
                    }
                  });
              }}
            >
              Register Here
            </Button>
          </Grid>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity}>
              {alert}
            </Alert>
          </Snackbar>
          <img src={clip} max-width="80%" height="auto" />
        </Grid>
      </div>
      <div>
        <div className={classes.bottomGrid}>
          <Typography>&copy; Unicorns, LLC</Typography>
        </div>
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
    paddingRight: "5.25%",
    paddingLeft: "3.0%",
  },
  buttonLink: {
    textDecoration: "none",
  },
  left: {
    display: "flex",
    alignItems: "center",
  },

  title: {
    paddingTop: 10,
    textTransform: "none",
  },

  buttons: {
    paddingTop: 9,
    display: "flex",
  },

  leftButton: {
    marginRight: 8,
  },

  rightButton: {
    marginRight: 8,
  },

  middleGrid: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 150,
  },

  middleGridLeftContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  bottomGrid: {
    height: 90,
    borderTop: "1px solid #7C7C7C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  registerButton: {
    fontSize: 20,
    color: "#FFFFFF",
    backgroundColor: "#4DA6FF",
    borderRadius: 20,
    width: 206,
    height: 62,
    border: "none",
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: "#4DA6FF"
    }
  },

  createMessage: {
    fontSize: 38,
    marginBottom: 50,
  },

  userInput: {
    width: 530,
    height: 81,
    marginTop: 23,
  },

  userInputBottom: {
    width: 530,
    height: 81,
    marginTop: 23,
    marginBottom: 34,
  },
}));

export default SignUpPage;
