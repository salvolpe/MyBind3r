import { React, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import HomeToolbar from "./toolbar/HomeToolbar";
import InsertToolbar from "./toolbar/InsertToolbar";
import DrawToolbar from "./toolbar/DrawToolbar";
import ViewToolbar from "./toolbar/ViewToolbar";
import HelpToolbar from "./toolbar/HelpToolbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}>
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AntTabs = withStyles({
  indicator: {
    backgroundColor: "#1890ff",
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
}))((props) => <Tab disableRipple {...props} />);

function openTabs(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Header() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [state, setState] = useState({
    file: false,
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={classes.drawer}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Back to Scripts", "New Script", "Save", "Import", "Export", "Print"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AppBar position="static">
          <Toolbar>
            {["File"].map((anchor) => (
              <div key={anchor}>
                <Button
                  className={classes.file}
                  onClick={toggleDrawer(anchor, true)}
                >
                  {anchor}
                </Button>
                <Drawer
                  anchor="left"
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </div>
            ))}
            <AntTabs
              value={value}
              onChange={handleChange}
              aria-label="menu options"
            >
              <AntTab label="Home" {...openTabs(0)} />
              <AntTab label="Insert" {...openTabs(1)} />
              <AntTab label="Draw" {...openTabs(2)} />
              <AntTab label="View" {...openTabs(3)} />
              <AntTab label="Help" {...openTabs(4)} />
            </AntTabs>
          </Toolbar>
        </AppBar>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
          <HomeToolbar />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <InsertToolbar />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <DrawToolbar />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <ViewToolbar />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <HelpToolbar />
        </TabPanel>
      </div>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  padding: {
    padding: theme.spacing(1),
  },
  file: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
    color: "white",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  drawer: {
    width: 250,
  },
  indicator: {
    backgroundColor: "#1890ff",
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
}));
