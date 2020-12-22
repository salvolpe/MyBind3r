import React, { useState, Component } from "react";
import { Rnd } from "react-rnd";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  notchedOutline: {
    borderWidth: "3px",
  },
  textField: {
    zIndex: 10,
  },
});

class EditableText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Note",
      width: "auto",
      height: "auto",
    };
  }

  updateText = (e) => {
    this.setState({ text: e.target.value });
  };
  updateSize = (w, h) => {
    this.setState({ width: w, height: h });
    console.log(this.state.width);
  };

  render() {
    const { classes } = this.props;
    return (
      <div className="textField">
        <Rnd
          default={{
            x: -1400,
            y: 10,
          }}
          size={{ width: this.state.width, height: this.state.height }}
          onResizeStop={(e, direction, ref, delta, position) => {
            this.updateSize(ref.style.width, ref.style.height);
          }}
          enableResizing={{
            top: false,
            right: true,
            bottom: false,
            left: true,
            topRight: false,
            bottomRight: false,
            bottomLeft: false,
            topLeft: false,
          }}
        >
          <form noValidate>
            <TextField
              classname="textField"
              type="text"
              id="note"
              variant="outlined"
              multiline
              rows={2}
              rowsMax={Infinity}
              style={{ width: "100%" }}
              inputStyle={{ width: "100%" }}
              placeholder="Type..."
              onChange={this.updateText}
            />
          </form>
        </Rnd>
      </div>
    );
  }
}
export default withStyles(styles)(EditableText);
