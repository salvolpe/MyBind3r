import React, { useState, useRef, useEffect } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Tooltip } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  menuItem: {
    display: "flex",
    alignItems: "center",
  },
}));

const setValue = (newValue) => {
  console.log(newValue); //  { userName: 'jane', age: 43, message:[...] }
};

export default function IconDropdown({ options, tooltip }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div>
      <Tooltip title={tooltip}>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? `${options.aria}-list-grow` : undefined}
          aria-label={options.aria}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          {options.icon}
        </IconButton>
      </Tooltip>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        onChange={handleChange}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id={`${options.aria}-list-grow`}
                  onKeyDown={handleListKeyDown}
                >
                  {options.items.map((option) => (
                    <MenuItem
                      className={classes.menuItem}
                      onClick={handleClose}
                    >
                      {option}
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
