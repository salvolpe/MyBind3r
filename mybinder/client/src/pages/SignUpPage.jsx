import React, { useState } from "react";
import {
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";

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

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={() => history.push("/")}>
        <img
          src={logo}
          width={80}
          height={80}
          alt="Logo: Stick figure reading binder with 3r on the inside"
        />
      </Button>
      <Typography>Hi! I'm the sign-up page!</Typography>
      <Grid container direction="column">
        <form noValidate>
          <TextField
            required
            id="firstname"
            label="First Name"
            variant="outlined"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            required
            id="lastname"
            label="Last Name"
            variant="outlined"
            onChange={(e) => setLastName(e.target.value)}
          />
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
          <TextField
            required
            id="repeat-password"
            label="Re-enter password"
            variant="outlined"
            onKeyDown={async (e) => {
              if (e.key === "Enter") {
                const user = { email, password, firstname, lastname };
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
                      setTimeout(() => history.push("/directory"), 3000);
                    } else {
                      console.error("Error:", data.error);
                      setAlert(data.error);
                      setSeverity("error");
                      setOpen(true);
                    }
                  });
              }
            }}
          />
        </form>
        <Button
          variant="outlined"
          onClick={async () => {
            const user = { email, password, firstname, lastname };
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
          Register
        </Button>
        <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={severity}>
            {alert}
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default SignUpPage;
