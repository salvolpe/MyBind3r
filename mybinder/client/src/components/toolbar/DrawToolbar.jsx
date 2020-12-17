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
        <Tooltip title="pen">
          <IconButton className={classes.buttons}  color="inherit" aria-label="pen">
          <Icon className= "fas fa-pen" />
              <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>

        <Tooltip title="object">
          <IconButton className={classes.buttons} color="inherit" aria-label="object">
          <Icon className= "fas fa-eraser" />
              <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="palette">
        <IconButton className={classes.buttons} color="inherit" aria-label="palette">
        <Icon className= "fas fa-palette" />
            <ArrowDropDownIcon className={classes.dropdown}/>
        </IconButton>
        </Tooltip>

        <Tooltip title="shapes">
          <IconButton className={classes.buttons} color="inherit" aria-label="shapes">
            <Icon className= "fas fa-shapes"/>
            <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>
            
      </Grid>
    </div>
  );
}
