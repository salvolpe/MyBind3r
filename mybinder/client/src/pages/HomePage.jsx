import React from "react";
import { Button, Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();
  return (
    <div>
      <Typography>Hi! I'm a blank page!</Typography>
      <Button onClick={() => history.push("/bind3r")}>Go to the bind3r!</Button>
    </div>
  );
};

export default HomePage;
