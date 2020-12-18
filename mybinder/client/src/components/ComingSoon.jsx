import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import React, { useState } from "react";

const ComingSoon = (props) => {
  const { onClose, open } = props;
  return (
    <Dialog
      onClose={onClose}
      aria-labelledby="coming-soon-dialog-box"
      open={open}
    >
      <DialogTitle id="coming-soon">Coming Soon!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This feature will be included in the beta release of MyBind3r. Thank
          you for testing our app! Feel free to continue clicking through!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default ComingSoon;
