import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import IconDropdown from "../IconDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    height: 60,
    width: "fit-content",
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
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

  return (
    <div>
      <Grid container alignItems="center" className={classes.root} >
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
              items: ["Script-Only", "Full Bind3r", "Multi-Page"],
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
                "Rehearsal Script",
                "Call Script",
                "Tech-Tuesdays",
                "+ New Layer",
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
    </div>
  );
}
