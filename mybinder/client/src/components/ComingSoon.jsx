import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React from "react";

const ComingSoon = (props) => {
  return (
    <Dialog aria-labelledby="coming-soon-dialog-box">
      <DialogTitle id="coming-soon">Coming Soon!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This feature will be included in the beta release of MyBind3r! Thank
          you for testing our app!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoon;
