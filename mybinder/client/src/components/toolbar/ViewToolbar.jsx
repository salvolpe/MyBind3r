import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import IconDropdown from "../IconDropdown";
import ComingSoon from "../ComingSoon";
import { Typography } from "@material-ui/core";

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
}));

export default function ViewToolbar() {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Tooltip title="zoom-in">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="zoom-in"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-search-plus" />
          </IconButton>
        </Tooltip>

        <Tooltip title="zoom-out">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="zoom-out"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-search-minus" />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="layers">
          <IconDropdown
            options={{
              aria: "Page View",
              items: [<div onClick={() => setDialogOpen(true)}>
                  <Typography> Script-Only </Typography>
              </div>, <div onClick={() => setDialogOpen(true)}>
                  <Typography> Full Bind3r </Typography>
              </div>],
              icon: (
                <div>
                  <Icon className="fas fa-book-open" />
                  &nbsp;Page View&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),

            }}
          />
        </Tooltip>

        <Tooltip title="layers">
          <IconDropdown
            options={{
              aria: "layers",
              items: [<div onClick={() => setDialogOpen(true)}>
                <Typography> Rehearsal Script </Typography> </div>,
                <div onClick={() => setDialogOpen(true)}>
                <Typography> Call Script </Typography> </div>,
                <div onClick={() => setDialogOpen(true)}>
                <Typography> Tech-Tuesdays </Typography> </div>,
                <div onClick={() => setDialogOpen(true)}>
                <Typography> + New Layer </Typography> </div>,
              ],
              icon: (
                <div>
                  <Icon className="fas fa-layer-group" />
                  &nbsp;Layers&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />
        </Tooltip>
      </Grid>
      <ComingSoon onClose={handleDialogClose} open={dialogOpen} />
    </div>
  );
}


/*

import React, { useState, Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import IconDropdown from "../IconDropdown";
import { Button, withStyles } from "@material-ui/core";
import ComingSoon from "../ComingSoon";

const useStyles = theme => ({
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
  button: {
    textTransform: 'none',
    fontSize: "1rem",
    fontFamily: "Roboto",
    fontWeight: 400,
    padding: "0px",
    lineHeight: 1.5,
    '&:hover': {
      backgroundColor: "transparent",
    },
  },
  dropdown: {
    margin: theme.spacing(-0.5),
  },
});

class ViewToolbar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      notated: 0,
      dialogOpen: false
    }
  }

  toggleDialog = () => {
    this.state.dialogOpen= !this.state.dialogOpen;
  };

  toggleLayer = () => {
    if (this.state.notated == 0) {
      this.state.notated = 100;
    } else {
      this.state.notated = 0;
    }
    console.log(this.state.notated);
  };
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Grid container alignItems="center" className={classes.root}>
          <Tooltip title="zoom-in">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="zoom-in"
            >
              <Icon className="fas fa-search-plus" />
            </IconButton>
          </Tooltip>

          <Tooltip title="zoom-out">
            <IconButton
              className={classes.buttons}
              color="inherit"
              aria-label="zoom-out"
            >
              <Icon className="fas fa-search-minus" />
            </IconButton>
          </Tooltip>

          <Divider orientation="vertical" flexItem />

          <Tooltip title="layers">
            <IconDropdown
              options={{
                aria: "Page View",
                items: ["Script-Only", "Full Bind3r"],
                icon: (
                  <div>
                    <Icon className="fas fa-book-open" />
                    &nbsp;Page View&nbsp;
                    <ArrowDropDownIcon className={classes.dropdown} />
                  </div>
                ),
              }}
            />
          </Tooltip>

          <Tooltip title="layers">
            <IconDropdown
              options={{
                aria: "layers",
                items: [
                  <Button disableRipple={true} className={classes.button} onClick={alert("clicked")}>Rehearsal Script</Button>,
                  <Button disableRipple={true} className={classes.button} onClick={this.toggleDialog}>Call Script</Button>,
                  <Button disableRipple={true} className={classes.button} onClick={this.toggleDialog}>Tech-Tuesdays</Button>,
                  <Button disableRipple={true} className={classes.button} onClick={this.toggleDialog}>+ New Layer</Button>,
                ],
                icon: (
                  <div>
                    <Icon className="fas fa-layer-group" />
                    &nbsp;Layers&nbsp;
                    <ArrowDropDownIcon className={classes.dropdown} />
                  </div>
                ),
              }}
            />
          </Tooltip>
        </Grid>
        <ComingSoon onClose={this.toggleDialog} open={this.state.dialogOpen} />
      </div>
    );
  }
}

export default withStyles(useStyles)(ViewToolbar);

*/