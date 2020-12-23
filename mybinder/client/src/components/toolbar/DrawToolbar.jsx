import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import IconDropdown from "../IconDropdown";
import ComingSoon from "../ComingSoon";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    width: "fit-content",
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 0.5),
    "& hr": {
      margin: theme.spacing(0, 0.5),
    },
  },
  buttons: {
    padding: theme.spacing(1.5, 1),
  },
  dropdown: {
    margin: theme.spacing(-0.5),
  },
  gridSpread: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "2%",
  },
  mode: { marginLeft: "auto" },
}));

export default function DrawToolbar() {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Grid className={classes.gridSpread}>
        <Grid container alignItems="center" className={classes.root}>
          <Tooltip title="Pencil">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="pen"
              onClick={() => setDialogOpen(true)}
            >
              <Icon className="fas fa-pen" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Erase">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="erase"
              onClick={() => setDialogOpen(true)}
            >
              <Icon className="fas fa-eraser" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem />

          <Tooltip title="Color">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="color"
              onClick={() => setDialogOpen(true)}
            >
              <Icon className="fas fa-palette" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </IconButton>
          </Tooltip>

          <Tooltip title="Shapes">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="shapes"
              onClick={() => setDialogOpen(true)}
            >
              <Icon className="fas fa-shapes" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </IconButton>
          </Tooltip>
        </Grid>
        <Typography className={classes.mode}>Draw Mode</Typography>
      </Grid>
      <ComingSoon onClose={handleDialogClose} open={dialogOpen} />
    </div>
  );
}
