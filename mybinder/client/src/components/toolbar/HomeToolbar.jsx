import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import { Button } from "@material-ui/core";
import FormatBoldIcon from "@material-ui/icons/FormatBold";
import FormatItalicIcon from "@material-ui/icons/FormatItalic";
import FormatUnderlinedIcon from "@material-ui/icons/FormatUnderlined";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import UndoIcon from "@material-ui/icons/Undo";
import RedoIcon from "@material-ui/icons/Redo";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import FormatColorTextIcon from "@material-ui/icons/FormatColorText";
import IconDropdown from "../IconDropdown";
import { Typography } from "@material-ui/core";

import FontPicker from "font-picker-react"; //From @samuelmeuli on GitHub
import ComingSoon from "../ComingSoon.jsx";

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
  fontpicker: {
    boxShadow: "none",
  },
  fontSizePicker: {
    display: "flex",
    width: 45,
    height: 33,
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid #bababa",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
  },
  fontselection: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconbutton: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
}));

export default function HomeToolbar() {
  const classes = useStyles();
  const fontsAPIKey = "AIzaSyBbn6JGXHqKy-6zofUcB-eN5PgrSvlTgcw"; //Use personal API key from Google

  const [activeFontFamily, setActiveFontFamily] = useState("Comic Sans");

  const [dialogOpen, setDialogOpen] = useState(false);
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Tooltip title="undo (Ctrl + Z)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="undo"
            onClick={() => setDialogOpen(true)}
          >
            <UndoIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="redo (Ctrl + Y)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="redo"
            onClick={() => setDialogOpen(true)}
          >
            <RedoIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />
        <Tooltip title="copy (Ctrl + C)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="copy"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-copy" aria-label="copy" />
          </IconButton>
        </Tooltip>
        <Tooltip title="cut (Ctrl + X)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="cut"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-cut" aria-label="cut" />
          </IconButton>
        </Tooltip>
        <Tooltip title="paste (Ctrl + V)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="paste"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-paste" aria-label="paste" />
          </IconButton>
        </Tooltip>
        <Divider orientation="vertical" flexItem />
        <div className={classes.fontselection}>
          <FontPicker
            className="apply-font"
            apiKey={fontsAPIKey}
            activeFontFamily={activeFontFamily}
            onChange={(nextFont) => setActiveFontFamily(nextFont.family)}
          />
          <div className={classes.fontSizePicker}>
            <Button onClick={() => setDialogOpen(true)}>
              <Typography>12</Typography>
              <ArrowDropDownIcon className={classes.dropdown} />
            </Button>
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <Tooltip title="bold">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="bold"
            onClick={() => setDialogOpen(true)}
          >
            <FormatBoldIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="italics">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="italics"
            onClick={() => setDialogOpen(true)}
          >
            <FormatItalicIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="underline">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="underline"
            onClick={() => setDialogOpen(true)}
          >
            <FormatUnderlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="font-color">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="font-color-options"
            onClick={() => setDialogOpen(true)}
          >
            <FormatColorTextIcon fontSize="large" />
            <ArrowDropDownIcon className={classes.dropdown} />
          </IconButton>
        </Tooltip>
        <Tooltip title="highlight">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="highlight"
            onClick={() => setDialogOpen(true)}
          >
            <div className={classes.iconbutton}>
              <Icon className="fas fa-highlighter" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </div>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />
        <IconDropdown
          tooltip="align-options"
          options={{
            aria: "align-options",
            items: [
              <Icon className="fas fa-align-left" aria-label="align-left" />,
              <Icon className="fas fa-align-center" aria-label="align-right" />,
              <Icon className="fas fa-align-right" aria-label="align-center" />,
              <Icon
                className="fas fa-align-justify"
                aria-label="align-justify"
              />,
            ],
            icon: (
              <div className={classes.iconbutton}>
                <Icon className="fas fa-align-left" />
                <ArrowDropDownIcon className={classes.dropdown} />
              </div>
            ),
          }}
        />
        <IconDropdown
          tooltip="list-options"
          options={{
            aria: "list-option",
            items: [
              <Icon className="fas fa-list-ul" />,
              <Icon className="fas fa-list" />,
              <Icon className="fas fa-list-alt" />,
            ],
            icon: (
              <div className={classes.iconbutton}>
                <Icon className="fas fa-list-ul" />
                <ArrowDropDownIcon className={classes.dropdown} />
              </div>
            ),
          }}
        />
        <IconDropdown
          tooltip="numbered-list-options"
          options={{
            aria: "numbered-list-options",
            items: [
              <Icon className="fas fa-list-ol" />,
              <Icon className="fas fa-list-ul" />,
            ],
            icon: (
              <div className={classes.iconbutton}>
                <Icon className="fas fa-list-ol" />
                <ArrowDropDownIcon className={classes.dropdown} />
              </div>
            ),
          }}
        />
      </Grid>
      <ComingSoon onClose={handleDialogClose} open={dialogOpen} />
    </div>
  );
}
