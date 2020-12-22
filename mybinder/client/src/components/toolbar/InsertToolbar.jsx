import React from "react";
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
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

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
  iconbutton: {
    fontSize: 20,
    display: "flex",
    justifyContent: "space-between",
    alightItems: "center",
  },
}));

export default function InsertToolbar() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Tooltip title="actor">
          <IconDropdown
            options={{
              aria: "actor",
              items: [
                "Benedick",
                "Leonato",
                "Don John",
                "Beatrice",
                "Hero",
                "Ursula",
                "+ New Actor",
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
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="object">
          <IconDropdown
            options={{
              aria: "object",
              items: [ <List id="row1" aria-label="row-of-objects">
                            <Button><Icon className="fas fa-chair" /></Button>
                            <Button><Icon className="fas fa-user-tie" /></Button>
                            <Button><Icon className="fas fa-bed" /></Button>
                        </List>,
                      <List id="row2" aria-label="row-of-objects">
                            <Button><Icon className="fas fa-home" /></Button>
                            <Button><Icon className="fas fa-cube" /></Button>
                            <Button><Icon className="fas fa-tablet" /></Button>
                      </List>,
                      <List id="row3" aria-label="row-of-objects">
                          <Button><Icon className="fas fa-drum" /></Button>
                            <Button><Icon className="fas fa-wine-glass" /></Button>
                            <Button><Icon className="fas fa-plus" /></Button>
                    </List>],
              icon: (
                <div>
                  <Icon className="fas fa-toolbox" />
                  &nbsp;Object&nbsp;
                  <ArrowDropDownIcon className={classes.dropdown} />
                </div>
              ),
            }}
          />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="floor-plan">
          <IconDropdown
            options={{
              aria: "floor-plan",
              items: [
                "Beatrice Room",
                "Hero Room",
                "Hero Hallway",
                "Ursula Basement",
                "+ New Floor Plan",
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
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="tags">
          <IconDropdown
            options={{
              aria: "tags",
              items: [
                "Blocking",
                "Lights",
                "Video",
                "Sound",
                "Props",
                "+ New Tag",
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
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="image">
          <IconButton
            className={classes.buttons}
            color="inherit"
            aria-label="image"
          >
            <Icon className="fas fa-image" />
            &nbsp;Image
          </IconButton>
        </Tooltip>
      </Grid>
    </div>
  );
}
