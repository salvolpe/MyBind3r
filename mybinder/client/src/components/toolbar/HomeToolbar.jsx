import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
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

import FontPicker from "font-picker-react"; //From @samuelmeuli on GitHub
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
  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Tooltip title="undo">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="undo"
          >
            <UndoIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="redo">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="redo"
          >
            <RedoIcon fontSize="large" />
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="copy-options">
          <IconDropdown
            options={{
              aria: "copy-options",
              items: [
                <Icon className="fas fa-copy" aria-label="copy" />,
                <Icon className="fas fa-cut" aria-label="cut" />,
                <Icon className="fas fa-paste" aria-label="paste" />,
              ],
              icon: (
                <div>
                  <Icon className="fas fa-clipboard" />
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />
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
            <Typography>12</Typography>
            <ArrowDropDownIcon className={classes.dropdown} />
          </div>
        </div>
        <Divider orientation="vertical" flexItem />
        <Tooltip title="bold">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="bold"
          >
            <FormatBoldIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="italics">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="italics"
          >
            <FormatItalicIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="underline">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="underline"
          >
            <FormatUnderlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="font-color">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="font-color-options"
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
          >
            <div className={classes.iconbutton}>
              <Icon className="fas fa-highlighter" />
              <ArrowDropDownIcon className={classes.dropdown} />
            </div>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />
        <Tooltip title="align-otions">
          <IconDropdown
            options={{
              aria: "align-options",
              items: [
                <Icon className="fas fa-align-left" aria-label="align-left" />,
                <Icon
                  className="fas fa-align-center"
                  aria-label="align-right"
                />,
                <Icon
                  className="fas fa-align-right"
                  aria-label="align-center"
                />,
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
        </Tooltip>
        <Tooltip title="list-options">
          <IconDropdown
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
        </Tooltip>
        <Tooltip title="numbered-list-options">
          <IconDropdown
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
        </Tooltip>
      </Grid>
    </div>
  );
}
