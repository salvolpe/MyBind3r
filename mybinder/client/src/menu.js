import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
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
  value: PropTypes.any.isRequired
};

const AntTabs = withStyles({
  root: {
    borderBottom: "1px solid #e8e8e8"
  },
  indicator: {
    backgroundColor: "#1890ff"
  }
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: "none",
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
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
      '"Segoe UI Symbol"'
    ].join(",")
  },
  selected: {}
}))((props) => <Tab disableRipple {...props} />);

function openTabs(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  padding: {
    padding: theme.spacing(1)
  },
  demo1: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <div className={classes.demo1}>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Home" {...openTabs(0)} />
          <AntTab label="Insert" {...openTabs(1)} />
          <AntTab label="Draw" {...openTabs(2)} />
          <AntTab label="View" {...openTabs(3)} />
          <AntTab label="Help" {...openTabs(4)} />
        </AntTabs>
        <Typography className={classes.padding} />
        <TabPanel value={value} index={0}>
          <Button variant="contained">Default</Button>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Button variant="contained">inserted</Button>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Button variant="contained">Draw</Button>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Button variant="contained">v</Button>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Button variant="contained">help</Button>
        </TabPanel>
      </div>
    </div>
  );
}
