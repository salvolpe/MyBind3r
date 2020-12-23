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
  ddButtons: {
    padding: theme.spacing(0.5, 0.2),
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
        <Tooltip title="Undo (Ctrl + Z)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Undo (Ctrl + Z)"
            onClick={() => setDialogOpen(true)}
          >
            <UndoIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Redo (Ctrl + Y)">
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
        <Tooltip title="Copy (Ctrl + C)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Undo (Ctrl + Z)"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-copy" aria-label="copy" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Cut (Ctrl + X)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Cut (Ctrl + X)"
            onClick={() => setDialogOpen(true)}
          >
            <Icon className="fas fa-cut" aria-label="cut" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Paste (Ctrl + V)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Paste (Ctrl + V)"
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
        <Tooltip title="Bold (Ctrl + B)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Bold (Ctrl + B)"
            onClick={() => setDialogOpen(true)}
          >
            <FormatBoldIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Italics (Ctrl + I)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Italics (Ctrl + I)"
            onClick={() => setDialogOpen(true)}
          >
            <FormatItalicIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Underline (Ctrl + U)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Underline (Ctrl + U)"
            onClick={() => setDialogOpen(true)}
          >
            <FormatUnderlinedIcon fontSize="large" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Font Color">
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
        <Tooltip title="Highlighter (Ctrl + L)">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="Highlighter (Ctrl + L)"
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
          tooltip="Text Alignment"
          options={{
            aria: "Text Alignment",
            items: [
              <Tooltip title="Align Left">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="align-left"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-align-left" aria-label="align-left" />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Center Text">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="align-center"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon
                    className="fas fa-align-center"
                    aria-label="align-center"
                  />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Align Right">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="align-right"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon
                    className="fas fa-align-right"
                    aria-label="align-right"
                  />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Justify">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="align-justify"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon
                    className="fas fa-align-justify"
                    aria-label="align-justify"
                  />
                </IconButton>
              </Tooltip>,
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
          tooltip="Bullet List"
          options={{
            aria: "Bullet List",
            items: [
              <Tooltip title="Circle Bullets">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="circle-bullets"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-list-ul" />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Square Bullets">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="square-bullets"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-list" />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Extra Bullets">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="extra-bullets-alt"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-list-alt" />
                </IconButton>
              </Tooltip>,
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
          tooltip="Numbered List"
          options={{
            aria: "numbered-list-options",
            items: [
              <Tooltip title="Numbers">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="arabic-numbers"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-list-ol" />
                </IconButton>
              </Tooltip>,
              <Tooltip title="Letters (not shown)">
                <IconButton
                  className={classes.ddButtons}
                  color="inherit"
                  aria-label="letters-list"
                  onClick={() => setDialogOpen(true)}
                >
                  <Icon className="fas fa-list-ul" />
                </IconButton>
              </Tooltip>,
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
