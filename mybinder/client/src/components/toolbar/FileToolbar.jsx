import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function FileToolbar() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
    component="nav"
    subheader={
      <ListSubheader component="div" id="file-options">
        File
      </ListSubheader>
    }
    className={classes.root}
  >
    <ListItem button>
      <ListItemText primary="Back to Scripts" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="+ New Script" />
    </ListItem>
    <ListItem button onClick={handleClick("Save")} >
      <ListItemText primary="Save" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Save version" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Save local copy" />
        </ListItem>
      </List>
    </Collapse>
    <ListItem button onClick={handleClick("Import")}>
      <ListItemText primary="Import" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Import PDF" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Import Actor" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Import Object" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Import Floor Plan" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Import Tag" />
        </ListItem>
      </List>
    </Collapse>
    <ListItem button onClick={handleClick("Export")}>
      <ListItemText primary="Export" />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
    <Collapse in={open} timeout="auto" unmountOnExit>
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Export Cue Sheet" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Export Actor Tracking" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Export Preferences" />
        </ListItem>
        <ListItem button className={classes.nested}>
          <ListItemText primary="Export Binder(?)" />
        </ListItem>
      </List>
    </Collapse>
    <ListItem button>
      <ListItemText primary="Print" />
    </ListItem>
  </List>
  );
}
