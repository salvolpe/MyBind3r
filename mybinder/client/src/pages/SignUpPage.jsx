import React, { useState } from "react";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";

const SignUpPage = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
          <TextField id="first_name" label="First Name" variant="outlined" />
          <TextField id="last_name" label="Last Name" variant="outlined" />
          <TextField
            id="username"
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <Button
          variant="outlined"
          onClick={async () => {
            const user = { username, password };
            const response = await fetch("/_register", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: user,
            });

            if (response.ok) {
              console.log(username + "signed up!");
            }
          }}
        >
          Register
        </Button>
      </Grid>
    </div>
  );
};

export default SignUpPage;
