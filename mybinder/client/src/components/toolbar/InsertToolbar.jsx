import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import IconDropdown from "../IconDropdown";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";

import ComingSoon from "../ComingSoon.jsx";
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
  ddButtonsProps: {
    padding: theme.spacing(0.5, 1.5),
  },
  iconbutton: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
    alightItems: "center",
  },
  gridSpread: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: "2%",
  },
  mode: { marginLeft: "auto" },
}));

export default function InsertToolbar(props) {
  const classes = useStyles();
  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };
  const { mode, handleModeChange } = props;

  return (
    <div>
      <Grid className={classes.gridSpread}>
        <Grid container alignItems="center" className={classes.root}>
          <IconDropdown
            tooltip="Actor (Ctrl + A)"
            options={{
              aria: "actor",
              items: [
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Benedick</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Leonato</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Don John</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Beatrice</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Hero</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Ursula</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>+ New Actor</Typography>
                </div>,
              ],
              icon: (
                <div className={classes.iconbutton}>
                  <Icon className="fas fa-user" fontSize="inherit" />
                  &nbsp;Actor&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />

          <Divider orientation="vertical" flexItem />

          <IconDropdown
            tooltip="Objects (Ctrl + G)"
            options={{
              aria: "object",
              items: [
                <List id="row1" aria-label="row-of-objects">
                  <Tooltip title="Chair">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="chair"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-chair" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Bullhorn">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="bullhorn"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-bullhorn" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Bed">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="bed"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-bed" />
                    </IconButton>
                  </Tooltip>
                </List>,
                <List id="row2" aria-label="row-of-objects">
                  <Tooltip title="Dog">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="dog"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-dog" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Box">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="box"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-cube" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Tablet">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="tablet"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-tablet" />
                    </IconButton>
                  </Tooltip>
                </List>,
                <List id="row3" aria-label="row-of-objects">
                  <Tooltip title="Drum">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="drum"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-drum" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Glass">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="wine-glass"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-wine-glass" />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="New Object">
                    <IconButton
                      className={classes.ddButtonsProps}
                      color="inherit"
                      aria-label="new-object"
                      onClick={() => setDialogOpen(true)}
                    >
                      <Icon className="fas fa-plus" />
                    </IconButton>
                  </Tooltip>
                </List>,
              ],
              icon: (
                <div>
                  <Icon className="fas fa-toolbox" />
                  &nbsp;Object&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />

          <Divider orientation="vertical" flexItem />
          <IconDropdown
            tooltip="Floor Plans (Ctrl + R)"
            options={{
              aria: "floor-plan",
              items: [
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Beatrice Room</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Hero Room</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Hero Hallway</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Ursula Basement</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>+ New Floor Plan</Typography>
                </div>,
              ],
              icon: (
                <div>
                  <Icon className="fas fa-object-group" />
                  &nbsp;Floor Plan&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />

          <Divider orientation="vertical" flexItem />
          <IconDropdown
            tooltip="Tags (Ctrl + T)"
            options={{
              aria: "tags",
              items: [
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Blocking</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Lights</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Video</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Sound</Typography>
                </div>,

                <div onClick={() => setDialogOpen(true)}>
                  <Typography>Props</Typography>
                </div>,
                <div onClick={() => setDialogOpen(true)}>
                  <Typography>+ New Tag</Typography>
                </div>,
              ],
              icon: (
                <div>
                  <Icon className="fas fa-tags" />
                  &nbsp;Tags&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />

          <Divider orientation="vertical" flexItem />

          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="image"
          >
            <Icon className="fas fa-image" />
            &nbsp;Image
          </IconButton>
        </Grid>
        <Typography className={classes.mode}>Insert Mode</Typography>
      </Grid>
      <ComingSoon onClose={handleDialogClose} open={dialogOpen} />
    </div>
  );
}
