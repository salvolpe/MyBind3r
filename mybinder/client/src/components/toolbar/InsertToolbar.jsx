import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import PersonIcon from '@material-ui/icons/Person';
import FormatColorTextIcon from '@material-ui/icons/FormatColorText';

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
          <IconButton className={classes.buttons}  color="inherit" aria-label="actor">
              <PersonIcon fontSize='large'/>
              Actor
              <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="object">
          <IconButton className={classes.buttons} color="inherit" aria-label="object">
          <Icon className= "fas fa-toolbox" />
          Object
              <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="floor-plan">
        <IconButton className={classes.buttons} color="inherit" aria-label="floor-plan">
        <Icon className= "fas fa-object-group" />
            Floor Plan
            <ArrowDropDownIcon className={classes.dropdown}/>
        </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="tags">
          <IconButton className={classes.buttons} color="inherit" aria-label="tags">
            <Icon className= "fas fa-tags"/>
                Tags
            <ArrowDropDownIcon className={classes.dropdown}/>
          </IconButton>
        </Tooltip>

        <Divider orientation="vertical" flexItem />

        <Tooltip title="tags">
          <IconButton className={classes.buttons} color="inherit" aria-label="tags">
            <Icon className= "fas fa-image"/>
                Image
          </IconButton>
        </Tooltip>
            
      </Grid>
    </div>
  );
}
