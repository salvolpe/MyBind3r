import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import logo from "../assets/mybind3r_logo.png";

const HomePage = () => {
  const history = useHistory();
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
      <Typography>Hi! I'm the home page!</Typography>
      <Button variant="outlined" onClick={() => history.push("/bind3r")}>
        Go to the bind3r!
      </Button>
      <Button variant="outlined" onClick={() => history.push("/login")}>
        Log In
      </Button>
      <Button variant="outlined" onClick={() => history.push("/sign-up")}>
        Sign-Up
      </Button>
    </div>
  );
};

export default HomePage;