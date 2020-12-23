import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useHistory, useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  const history = useHistory();
  const { user } = useParams();
  const [saveOpen, setSave] = React.useState(false);
  const [importOpen, setImport] = React.useState(false);
  const [exportOpen, setExport] = React.useState(false);
  
  const handleFileItemClick = () => {
    history.push(`/${user}/directory`);
  };

  const handleClick = (value) => {
    if (value === "Save") {
      setSave(!saveOpen);
    } else if (value === "Import") {
      setImport(!importOpen);
    } else if (value === "Export") {
      setExport(!exportOpen);
    }
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
      <ListItem button onClick={handleFileItemClick}>
        <ListItemText primary="Back to Binders" />
      </ListItem>
      <ListItem button>
        <ListItemText primary= "New Binder" />
      </ListItem>
      <ListItem button>
        <ListItemText primary="Preferences" />
      </ListItem>
      <ListItem button onClick={() => handleClick("Save")}>
        <ListItemText primary="Save (Ctrl + S)" />
        {saveOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={saveOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Save version" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Save local copy" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={() => handleClick("Import")}>
        <ListItemText primary="Import" />
        {importOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={importOpen} timeout="auto" unmountOnExit>
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
      <ListItem button onClick={() => handleClick("Export")}>
        <ListItemText primary="Export" />
        {exportOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={exportOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Export Cue Sheet" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Export Actor Tracking" />
          </ListItem>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Export Binder" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button>
        <ListItemText primary="Print (Ctrl + P)" />
      </ListItem>
    </List>
  );
}
