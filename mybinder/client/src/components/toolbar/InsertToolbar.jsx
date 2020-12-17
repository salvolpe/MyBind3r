import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import IconDropdown from "../IconDropdown";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    padding: theme.spacing(0, 0.5),
    marginLeft: theme.spacing(1.5),
    '& hr': {
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

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <div>
      <Grid container alignItems="center" className={classes.root}>
        <Tooltip title="actor">
          <IconDropdown
                options={{
                aria: "actor",
                items: ["Benedick", "Leonato", "Don John", "Beatrice", "Hero", "Ursula", "+ New Actor"],
                icon: (
                    <div>
                      <Icon className= "fas fa-user" />
                      Actor
                      <ArrowDropDownIcon className={classes.dropdown}/>
                    </div>
                ),
            }} />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="object">
          <IconDropdown
                options={{
                aria: "object",
                items: ["+ New Object"],
                icon: (
                    <div>
                      <Icon className= "fas fa-toolbox" />
                      Object
                      <ArrowDropDownIcon className={classes.dropdown}/>
                    </div>
                ),
            }} />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="floor-plan">
        <IconDropdown
                options={{
                aria: "floor-plan",
                items: ["Beatrice Room", "Hero Room", "Hero Hallway", "Ursula Basement", "+ New Floor Plan"],
                icon: (
                    <div>
                      <Icon className= "fas fa-object-group" />
                        Floor Plan
                      <ArrowDropDownIcon className={classes.dropdown}/>
                    </div>
                ),
            }} />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="tags">
          <IconDropdown
                options={{
                aria: "tags",
                items: ["Blocking", "Lights", "Video", "Sound", "Props", "+ New Floor Plan"],
                icon: (
                    <div>
                      <Icon className= "fas fa-tags"/>
                        Tags
                      <ArrowDropDownIcon className={classes.dropdown}/>
                    </div>
                ),
            }} />
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="image">
          <IconButton className={classes.buttons} color="inherit" aria-label="image">
            <Icon className= "fas fa-image"/>
                Image
          </IconButton>
        </Tooltip>
            
      </Grid>
    </div>
  );
}