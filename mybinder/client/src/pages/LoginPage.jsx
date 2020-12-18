import React, { useState } from "react";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { Link } from "../utils/react-router";
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
      <Typography variant="h4" className={classes.title}>
        MyBind3r
      </Typography>
      </Button>
    </Grid>
    <div className={classes.buttons}>
      <Link className={classes.buttonLink} to={"/login"}>
        <Button variant="outlined" className={classes.leftButton}>
          Sign In
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
        <Typography className={classes.welcomeMessage}>
          Welcome Back!
        </Typography>
        <form noValidate>
          <TextField className={classes.userInputTop}
          required
          id="email"
          label="Email"
          variant="outlined"
          onChange={(e) => setEmail(e.target.value)}
         />
         </form>
         <form noValidate>
        <TextField className={classes.userInputBottom}
        required
        id="password"
        label="Password"
        variant="outlined"
        onChange={(e) =>setPassword(e.target.value)}
        onKeyDown-={async (e) => {
          if(e.key == "Enter"){
            document.getElementById("login").click()
          }
        }}
        />
      </form>
      <Button className={classes.loginButton}
          id="login"
          variant="outlined"
          onClick={async () => {
            const user = { email, password };
            const name = email.substring(0, email.indexOf("@"));
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
        Log In
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={severity}>
        {alert}
      </Alert>
    </Snackbar>
      </Grid>
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
    textTransform: "none"
  },

  buttons: {
    paddingTop: 9,
    width: 113
  },

  leftButton: {
    marginRight: 8,
  },

  rightButton: {
    marginRight: 8,
  },

  bottomGrid: {
    height: 90,
    borderTop: "1px solid #7C7C7C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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
    flexDirection:"column"

  }, 
  userInputTop: {
    width: 530,
    height: 81,
    marginBottom: 45
  }, 

  userInputBottom: {
    width: 530,
    height: 81,
    marginBottom: 130
  },

  welcomeMessage: {
    fontSize: 45,
    marginBottom: 120,
    marginTop: -100,
    marginLeft: -10
  }, 

  loginButton: {
    width: 206,
    height: 62,
    backgroundColor: "#4DA6FF",
    fontSize: 20,
    color: "#FFFFFF",
    borderRadius: 20,
    border:"none",
    marginLeft: -10

  }

}));

export default LoginPage;

